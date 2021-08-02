import {
	call, select, takeEvery,
} from 'redux-saga/effects';
import {
	syncUserData,
} from '@redux/action/user';
import { loveDb } from 'util/loveDb';
import { UserProperty } from 'redux/types/user';
import { getUser } from 'redux/selector';

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

				return localUserData[key] && localUserData[key] !== remoteUserData[key];
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
