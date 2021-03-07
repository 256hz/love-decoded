import SoundPlayer from 'react-native-sound-player';
import {
	call,
	delay,
	put,
	race,
	select,
	take,
	takeEvery,
	takeLeading,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
	appBackgrounded,
	appInactivated,
	playAudioFile,
	pauseAudio,
	playAudio,
	setAudioInfo,
	setAudioIsGettingInfo,
	setAudioIsLoaded,
	setAudioIsPlaying,
	stopGettingAudioInfo,
	appActivated,
} from '@redux/action';
import {
	getAudioInfo,
	isAudioGettingInfo,
	isAudioLoaded,
	isAudioPlaying,
} from '@redux/selector';
import {
	resetAudioPlayer,
	setAudioPlayCompleted,
	setAudioTotalPlayed,
} from 'redux/action/audio';

export function* watchForPlayAudioFile() {
	yield takeEvery(playAudioFile, function* ({ payload: { audioFilename } }) {
		// yield put(resetAudioPlayer(true));
		yield put(setAudioIsLoaded(false));

		try {
			const [ filename, extension ] = audioFilename.split('.');
			console.log('loading:', filename, extension);
			yield call([ SoundPlayer, 'loadSoundFile' ], filename, extension);
		} catch (error) {
			console.error(error);
		}
	});
}

export function* watchForPlayAudio() {
	yield takeEvery(playAudio, function* () {
		const isLoaded = yield select(isAudioLoaded);

		if (isLoaded) {
			console.log('play');
			SoundPlayer.play();
			yield put(setAudioIsPlaying(true));
			yield call(getInfoWhilePlaying);
		}
	});
}

const soundPlayerEmitter = eventChannel(emitter => {
	const onLoad = SoundPlayer.addEventListener('FinishedLoadingFile', ({ success }) => {
		if (!success) {
			console.error('error loading audio file');
			return;
		}

		emitter(success);
	});

	return onLoad.remove;
});

export function* watchForSuccessfulLoad() {
	yield takeEvery(soundPlayerEmitter, function* (success: boolean) {
		if (success) {
			console.log('loaded');
			yield put(setAudioIsLoaded(true));
			yield put(playAudio());
		}
	});
}

function* getInfo() {
	try {
		const { currentTime, duration } = yield call([ SoundPlayer, 'getInfo' ]);
		console.log({ currentTime, duration });
		yield put(setAudioInfo(currentTime, duration));
		yield put(setAudioTotalPlayed(currentTime));
	} catch (error) {
		console.error('error getting audio info', error);
	}
}

function* getInfoWhilePlaying() {
	const isGettingInfo = yield select(isAudioGettingInfo);
	if (isGettingInfo) {
		return;
	}

	yield put(setAudioIsGettingInfo(true));

	console.log('getting info');
	while (true) {
		const isPlaying = yield select(isAudioPlaying);
		const isStillGettingInfo = yield select(isAudioGettingInfo);

		if (!isPlaying || !isStillGettingInfo) {
			break;
		}

		yield call(getInfo);

		// check for end of play
		const { currentTime, duration } = yield select(getAudioInfo);
		if (currentTime >= duration - 1) {
			const timeLeft = duration - currentTime;
			console.log('ending in:', timeLeft);
			yield delay(timeLeft);
			yield put(setAudioPlayCompleted(true));
			console.log('completed');
			yield put(resetAudioPlayer(false, 'onCompleted'));
			break;
		}

		const [ stop, waited ] = yield race([ take(stopGettingAudioInfo), delay(1000) ]);
		if (stop) {
			yield call(getInfo);
			break;
		}
	}

	yield put(setAudioIsGettingInfo(false));
	console.log('end getting info loop');
}

export function* watchForPauseAudio() {
	yield takeEvery(pauseAudio, function* () {
		console.log('pause');
		SoundPlayer.pause();
		yield put(setAudioIsPlaying(false));
		yield put(stopGettingAudioInfo());
	});
}

function* seek(seekTarget: number) {
	try {
		yield call([ SoundPlayer, 'seek' ], seekTarget);
		yield call(getInfo);
	} catch (error) {
		console.error(`error seeking to ${seekTarget} in audio`, error);
	}
}

export function* pauseOnBackground() {
	yield takeEvery([ appInactivated, appBackgrounded ], function* () {
		yield put(pauseAudio());
	});
}

export function* resetOnActive() {
	yield takeEvery(appActivated, function* () {
		const { currentPosition } = yield select(getAudioInfo);
		if (currentPosition !== 0) {
			yield put(playAudio());
			return;
		}

		yield put(resetAudioPlayer(true, 'appActivated'));
	});
}

export function* watchForResetAudio() {
	yield takeEvery(resetAudioPlayer, function* ({ payload: { source, clearPlayCompleted } }) {
		console.log(clearPlayCompleted ? 'hard' : 'soft', 'reset from:', source || 'unknown');
		yield put(pauseAudio());
		yield call(seek, 0);
	});
}
