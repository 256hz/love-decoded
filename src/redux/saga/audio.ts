import SoundPlayer from 'react-native-sound-player';
import {
	call,
	delay,
	put,
	select,
	takeEvery,
	takeLeading,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
	appActivated,
	appBackgrounded,
	appInactivated,
	fastForwardAudio,
	loadAudioFile,
	pauseAudio,
	playAudio,
	rewindAudio,
	setAudioInfo,
	setAudioIsGettingInfo,
	setAudioIsLoaded,
	setAudioIsPlaying,
} from '@redux/action';
import {
	getAudioInfo,
	getAudioTotalPlayed,
	isAudioGettingInfo,
	isAudioLoaded,
	isAudioPlaying,
} from '@redux/selector';
import { resetAudioPlayer, setAudioPlayCompleted } from 'redux/action/audio';

const soundPlayerEmitter = eventChannel(emitter => {
	const onLoad = SoundPlayer.addEventListener('FinishedLoadingFile', ({ success }) => {
		// console.log('load');
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
			// console.log('audioIsLoaded');
			yield put(setAudioIsLoaded(true));
			yield put(playAudio());
		}
	});
}

function* getInfo() {
	try {
		const { currentTime, duration } = yield call([ SoundPlayer, 'getInfo' ]);
		// console.log({ currentTime, duration });
		yield put(setAudioInfo(currentTime, duration));
	} catch (error) {
		console.error('error getting audio info', error);
	}
}

function* loopGetInfo() {
	const isGettingInfo = yield select(isAudioGettingInfo);
	if (isGettingInfo) {
		return;
	}

	yield put(setAudioIsGettingInfo(true));

	// console.log('looping');
	while (true) {
		const isPlaying = yield select(isAudioPlaying);
		if (!isPlaying) {
			break;
		}

		yield call(getInfo);

		const { currentTime, duration } = yield select(getAudioInfo);
		if (currentTime >= duration - 0.5) {
			yield delay(300);
			yield put(setAudioPlayCompleted(true));
			break;
		}

		yield delay(1000);
	}
	// console.log('end loop');

	yield call(getInfo);
	yield put(setAudioIsGettingInfo(false));
}

export function* watchForLoadAudioFile() {
	yield takeLeading(loadAudioFile, function* ({ payload: { filename, extension } }) {
		try {
			// console.log('loading');
			yield call([ SoundPlayer, 'loadSoundFile' ], filename, extension);
		} catch (error) {
			console.error(error);
			return;
		}

		yield call([ SoundPlayer, 'play' ]);
	});
}

export function* watchForPlayAudio() {
	yield takeLeading(playAudio, function* () {
		// console.log('play');
		const isLoaded = yield select(isAudioLoaded);

		if (isLoaded) {
			SoundPlayer.play();
			yield put(setAudioIsPlaying(true));
			yield call(loopGetInfo);
		}
	});
}

export function* watchForPauseAudio() {
	yield takeLeading(pauseAudio, function* () {
		// console.log('pause');
		const isLoaded = yield select(isAudioLoaded);

		if (isLoaded) {
			SoundPlayer.pause();
			yield put(setAudioIsPlaying(false));
		}
	});
}

export function* watchForFastForwardAudio() {
	yield takeLeading(fastForwardAudio, function* () {
		// console.log('ff');
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
		// console.log('rw');
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

function* seek(seekTarget: number) {
	try {
		yield call([ SoundPlayer, 'seek' ], seekTarget);
		yield call(getInfo);
	} catch (error) {
		console.error('could not seek', error);
	}
}

export function* watchForSetAudioPlayCompleted() {
	yield takeEvery(setAudioPlayCompleted, function* ({ payload: { playCompleted } }) {
		if (!playCompleted) {
			return;
		}

		yield put(pauseAudio());
		yield call(seek, 0);
	});
}

export function* resetOnAppStateChange() {
	yield takeEvery([ appInactivated, appBackgrounded ], function* () {
		yield put(pauseAudio());
	});
}
