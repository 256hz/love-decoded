import { AppState } from 'react-native';
import { eventChannel } from 'redux-saga';
import { put, take, takeEvery } from 'redux-saga/effects';
import {
	appActivated,
	appBackgrounded,
	appInactivated,
	setAppState,
} from 'redux/action';

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
