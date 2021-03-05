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
	fastForwardAudio,
	playAudioFile,
	pauseAudio,
	playAudio,
	rewindAudio,
	setAudioInfo,
	setAudioIsGettingInfo,
	setAudioIsLoaded,
	setAudioIsPlaying,
	stopGettingAudioInfo,
	appActivated,
} from '@redux/action';
import {
	getAudioInfo,
	getAudioTotalPlayed,
	isAudioGettingInfo,
	isAudioLoaded,
	isAudioPlaying,
} from '@redux/selector';
import {
	resetAudioPlayer, setAudioPlayCompleted, setAudioTotalPlayed, setCurrentAudioFilename,
} from 'redux/action/audio';

export function* watchForPlayAudioFile() {
	yield takeEvery(playAudioFile, function* ({ payload: { filename, extension } }) {
		yield put(resetAudioPlayer(true));
		yield put(setAudioIsLoaded(false));
		yield put(setCurrentAudioFilename([ filename, extension ].join('.')));

		try {
			console.log('loading');
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
			console.log('ending in:', duration - currentTime);
			yield delay(duration - currentTime);
			yield put(resetAudioPlayer(false));
			console.log('loaded:', yield select(isAudioLoaded));
			yield put(setAudioPlayCompleted(true));
			console.log('completed');
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
		yield put(stopGettingAudioInfo());

		const isLoaded = yield select(isAudioLoaded);

		if (isLoaded) {
			SoundPlayer.pause();
			yield put(setAudioIsPlaying(false));
		}
	});
}

/*
export function* watchForFastForwardAudio() {
	yield takeLeading(fastForwardAudio, function* () {
		console.log('ff');
		const isLoaded = yield select(isAudioLoaded);
		if (!isLoaded) {
			return;
		}

		const { currentTime, duration } = yield select(getAudioInfo);
		const totalPlayed = yield select(getAudioTotalPlayed);
		if (duration === 0) {
			return;
		}

		if (__DEV__) {
			const seekTarget = Math.min(currentTime + 10, duration - 0.5);
			yield call(seek, seekTarget);
			yield call(getInfo);
		}

		if (currentTime < totalPlayed - 2) {
			yield call(seek, Math.min(currentTime + 10, totalPlayed - 0.5, duration - 0.5));
		}
	});
}

export function* watchForRewindAudio() {
	yield takeEvery(rewindAudio, function* () {
		console.log('rw');
		const isLoaded = yield select(isAudioLoaded);
		if (!isLoaded) {
			return;
		}

		const { currentTime, duration } = yield select(getAudioInfo);
		if (duration === 0) {
			return;
		}

		yield call(seek, Math.max(0, currentTime - 10));
	});
}
*/

function* seek(seekTarget: number) {
	try {
		yield call([ SoundPlayer, 'seek' ], seekTarget);
		yield call(getInfo);
	} catch (error) {
		console.error(`error seeking to ${seekTarget} in audio`, error);
	}
}

export function* watchForSetAudioPlayCompleted() {
	yield takeEvery(setAudioPlayCompleted, function* ({ payload: { playCompleted } }) {
		if (playCompleted) {
			yield console.log('completed');
			yield put(resetAudioPlayer(false));
		}
	});
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

		yield put(resetAudioPlayer(true));
	});
}

export function* watchForResetAudio() {
	yield takeEvery(resetAudioPlayer, function* () {
		console.log('reset');
		yield put(pauseAudio());
		yield call(seek, 0);
	});
}
