import { takeEvery } from 'redux-saga/effects';
import { logIn } from '@redux/action/user';

export function* watchForLogIn() {
	yield takeEvery(logIn, function*({ payload: { username, password } }) {
		yield console.log({ username, password });
	});
}
