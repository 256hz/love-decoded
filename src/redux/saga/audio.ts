import { setAudioCurrentTime, setAudioIsPlaying } from '@redux/action';
import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
import { getAudioCurrentTime, getAudioIsPlaying } from 'redux/selector';

const TIMER_INTERVAL_S = 0.25;

function* incrementCurrentTime() {
	while (true) {
		const isPlaying = yield select(getAudioIsPlaying);
		if (!isPlaying) {
			return;
		}

		const playbackTime = yield select(getAudioCurrentTime);

		yield delay(TIMER_INTERVAL_S * 1000);
		yield put(setAudioCurrentTime(playbackTime + TIMER_INTERVAL_S));
	}
}

export function* watchForSetAudioIsPlaying() {
	yield takeEvery(setAudioIsPlaying, function*({ payload: { isPlaying } }) {
		if (isPlaying) {
			yield call(incrementCurrentTime);
		}
	});
}

