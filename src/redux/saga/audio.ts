import SoundPlayer from 'react-native-sound-player';
import {
	call,
	delay,
	put,
	race,
	select,
	take,
	takeEvery,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
	loadAudioFile,
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
	getAudioFilename,
	getAudioInfo,
	getCurrentRouteName,
	isAudioActive,
	isAudioGettingInfo,
	isAudioLoaded,
	isAudioPlaying,
} from '@redux/selector';
import {
	resetAudioPlayer,
	setAudioTotalPlayed,
	setAudioPlayedToEndOnScreen,
	setCurrentAudioFilename,
} from '@redux/action/audio';
import { OnboardingScreens, StepScreens } from 'route/enums';

export function* watchForloadAudioFile() {
	yield takeEvery(loadAudioFile, function* ({ payload: { audioFilename } }) {
		yield put(resetAudioPlayer(true, 'on load'));
		yield put(setAudioIsLoaded(false));

		try {
			console.log('loading:', audioFilename);
			const [ filename, extension ] = audioFilename.split('.');
			yield call([ SoundPlayer, 'loadSoundFile' ], filename, extension);
			yield put(setCurrentAudioFilename(audioFilename));
		} catch (error) {
			console.error(error);
		}
	});
}

export function* watchForPlayAudio() {
	yield takeEvery(playAudio, function* () {
		yield call(getInfo);

		const isLoaded = yield select(isAudioLoaded);
		const route = yield select(getCurrentRouteName);

		if (isLoaded) {
			console.log('play');
			SoundPlayer.play();
			yield put(setAudioIsPlaying(true));
			yield call(getInfoWhilePlaying, route);
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
		if (!success) {
			console.error('did not load audio file');
			return;
		}

		console.log('loaded');
		yield put(setAudioIsLoaded(true));
		yield call(getInfo);
	});
}

function* getInfo() {
	const isLoaded = yield select(isAudioLoaded);
	if (!isLoaded) {
		console.log('tried to get info before file loaded');
		return;
	}

	try {
		const { currentTime, duration } = yield call([ SoundPlayer, 'getInfo' ]);
		console.log({ currentTime, duration });
		yield put(setAudioInfo(currentTime, duration));
		yield put(setAudioTotalPlayed(currentTime));
	} catch (error) {
		console.error('error getting audio info', error);
	}
}

function* getInfoWhilePlaying(route: OnboardingScreens | StepScreens) {
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

		try {
			yield call(getInfo);
		} catch (error) {
			console.error(error);
		}

		// check for end of play
		const { currentTime, duration } = yield select(getAudioInfo);
		if (currentTime >= duration - 1) {
			const timeLeft = duration - currentTime;
			console.log('ending in:', timeLeft);
			yield delay(timeLeft);

			yield put(setAudioPlayedToEndOnScreen(route));

			console.log('completed');

			yield put(resetAudioPlayer(false, 'onCompleted'));
			break;
		}

		const [ stop ] = yield race([ take(stopGettingAudioInfo), delay(900) ]);
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

export function* resumeOnActive() {
	yield takeEvery(appActivated, function* () {
		const { currentPosition } = yield select(getAudioInfo);
		const isLoaded = yield select(isAudioLoaded);
		const playerIsActive = yield select(isAudioActive);

		if (isLoaded && playerIsActive && currentPosition !== 0) {
			console.log('resuming');
			yield put(playAudio());
		}
	});
}

export function* watchForResetAudio() {
	yield takeEvery(resetAudioPlayer, function* ({ payload: { source, hardReset } }) {
		console.log(hardReset ? 'hard' : 'soft', 'reset from:', source || 'unknown');
		yield put(pauseAudio());
		yield call(seek, 0);
	});
}
