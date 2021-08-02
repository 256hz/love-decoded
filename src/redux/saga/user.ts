import {
	call, put, select, takeEvery,
} from 'redux-saga/effects';
import {
	logIn, setLoggedInUser, setUserProperty, syncUserData,
} from '@redux/action/user';
import { loveDb } from 'util/loveDb';
import { UserProperty } from 'redux/types/user';
import { getUser, getUserId } from 'redux/selector';

export function* watchForLogIn() {
	yield takeEvery(setLoggedInUser, function*({ payload: { email, password } }) {
		try {
			const { id, accessToken } = yield loveDb.post('https://lovedb.azurewebsites.net/signin', {
				email,
				password,
			});

			yield put(setUserProperty(UserProperty.Email, email));
			yield put(setUserProperty(UserProperty.Id, id));
			yield put(setUserProperty(UserProperty.AccessToken, accessToken));
		} catch (error) {

		}
	});
}

export function* watchForSyncUserData() {
	const ignoreFields = [
		UserProperty.AccessToken,
		UserProperty.PasswordHash,
	];

	yield takeEvery(syncUserData, function*() {
		try {
			const localUserData = yield select(getUser);
			const remoteUserData = yield call([ loveDb, 'get' ], `/user/${localUserData.id}`);
			const needsUpdate = Object.keys(remoteUserData).some(key => {
				if (ignoreFields.includes(key as UserProperty)) {
					return false;
				}

				return localUserData[key] !== remoteUserData[key];
			});

			if (needsUpdate) {
				const response = yield call([ loveDb, 'post' ], `/user/${localUserData.id}`, localUserData);

				if (response.status !== 200) {
					throw new Error(response.data.message);
				}
			}
		} catch (error) {
			console.error(error);
		}
	});
}
