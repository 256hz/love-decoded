/* eslint-disable no-restricted-syntax */
import { call } from 'react-native-reanimated';
import { put, select, takeEvery } from 'redux-saga/effects';
import { loveDb } from '@util/loveDb';
import { RemoteJournal } from '@redux/types/journal';
import {
	AllSteps,
	DayValues,
	NumberFromDay,
	NumberFromStep,
} from '@redux/types/survey';
import { setJournal, syncJournals } from '@redux/action';
import { getJournal, getUserId } from '@redux/selector';

export function* watchForSyncJournals() {
	yield takeEvery(syncJournals, function*() {
		const userId = yield select(getUserId);

		let remoteJournals: RemoteJournal[] = [];
		try {
			const journalResponse = yield call([ loveDb, 'get' ], `journal/${userId}/journal`);
			remoteJournals = journalResponse?.data || [];
		} catch (error) {
			console.error(error);
			return;
		}

		for (const step of AllSteps) {
			const stepNumber = NumberFromStep[step];
			for (const day of DayValues) {
				const dayNumber = NumberFromDay[day];
				const remoteJournal = remoteJournals.find(j => j.step === stepNumber && j.day === dayNumber);
				const localJournal = yield select(getJournal(stepNumber, dayNumber));
				const journalBody = {
					step: stepNumber,
					day: dayNumber,
					title: localJournal.title,
					entry: localJournal.entry,
				};

				if (
					localJournal &&
					remoteJournal?.id &&
					(remoteJournal.entry !== localJournal.entry || remoteJournal.title !== localJournal.title)
				) {
					// update remote journal
					try {
						yield call([ loveDb, 'put' ], `/journal/${userId}/journal/${remoteJournal.id}`, journalBody);
					} catch (error) {
						console.error(error);
					}

					return;
				}

				if (localJournal && !remoteJournal?.id) {
					// create remote journal
					try {
						yield call([ loveDb, 'post' ], `/journal/${userId}/journal`, journalBody);
					} catch (error) {
						console.error(error);
					}

					return;
				}

				if (remoteJournal?.id && !localJournal) {
					yield put(setJournal(stepNumber, dayNumber, remoteJournal.entry, remoteJournal.title));
					return;
				}
			}
		}
	});
}
