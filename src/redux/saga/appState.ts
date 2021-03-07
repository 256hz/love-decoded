import { AppState } from 'react-native';
import { eventChannel } from 'redux-saga';
import {
	call, put, select, take, takeEvery,
} from 'redux-saga/effects';
import {
	appActivated,
	appBackgrounded,
	appInactivated,
	resetAudioPlayer,
	setAppState,
} from 'redux/action';
import { getLastActiveEpochSeconds } from 'redux/selector/appState';

const appStateChannel = eventChannel(emitter => {
	const listener = status => {
		emitter(status);
	};

	AppState.addEventListener('change', listener);

	return () => {
		AppState.removeEventListener('change', listener);
	};
});

export function* watchForAppStateChanges() {
	const appState = AppState.currentState;

	yield put(setAppState(appState));
	while (true) {
		const data = yield take(appStateChannel);
		if (!data) {
			break;
		}

		yield call(resetAudioPlayerIfLongInactive);
		yield put(setAppState(data));
	}
}

export function* emitAppStateEventsOnChange() {
	yield takeEvery(setAppState, function* emitEvent({ payload: { status } }: any) {
		switch (status) {
			case 'active': yield put(appActivated()); break;
			case 'background': yield put(appBackgrounded()); break;
			case 'inactive': yield put(appInactivated()); break;
			case 'unknown': break;
			default: console.warn('someone has invented a new appState');
		}

		console.log('appState:', status);
	});
}

function* resetAudioPlayerIfLongInactive() {
	const lastActiveEpochSeconds = yield select(getLastActiveEpochSeconds);
	const currentEpochSeconds = Math.floor(new Date().getTime()) / 1000;
	const fiveMinutes = 300;
	const tenMinutes = 600;
	const timeDifferenceSeconds = currentEpochSeconds - lastActiveEpochSeconds;

	if (timeDifferenceSeconds >= tenMinutes) {
		console.log('inactive for:', timeDifferenceSeconds, ', audio player full reset');
		yield put(resetAudioPlayer(true, 'longInactive'));
		return;
	}

	if (timeDifferenceSeconds >= fiveMinutes) {
		console.log('inactive for:', timeDifferenceSeconds, ', audio player soft reset');
		yield put(resetAudioPlayer(false, 'longInactive'));
	}
}
