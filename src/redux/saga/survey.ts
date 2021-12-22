/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import {
	call,
	put,
	select,
	takeEvery,
} from 'redux-saga/effects';
import { loveDb } from '@util/loveDb';
import {
	setDaySurveyResponse,
	setOnboardingSurveyResponse,
	setStepActivityResponse,
	syncSurveys,
} from '@redux/action';
import { getAllSurveys, getUserId } from '@redux/selector';
import {
	Activities,
	AllSteps,
	CourseFromNumber,
	CourseFromStep,
	DayFromNumber,
	Days,
	DayValues,
	NumberFromCourse,
	NumberFromDay,
	NumberFromStep,
	RemoteSurvey,
	StepFromNumber,
	SurveyResponse,
} from '@redux/types/survey';
import { CourseNumber, StepNumber, DayNumber } from '@redux/types/user';

type SyncSurveyProps = {
	userId: string,
	surveyKey: string,
	courseNumber: CourseNumber,
	stepNumber: StepNumber,
	dayNumber: DayNumber,
	localSurveyResponse?: string | number | string[] | number[],
	remoteSurvey?: RemoteSurvey,
};

function* syncSurvey({
	userId,
	surveyKey,
	courseNumber,
	stepNumber,
	dayNumber,
	localSurveyResponse,
	remoteSurvey,
}: SyncSurveyProps) {
	const surveyBody = {
		survey_id: surveyKey,
		survey_response: JSON.stringify(localSurveyResponse) || '',
		courseNumber,
		stepNumber,
		dayNumber,
	};

	// The user's device is always the source of truth.  There isn't any other way to add/change survey responses, and we want the app to be completely offline-first.

	try {
		// If we have a response locally but not remotely, create the survey remotely.
		if (localSurveyResponse && !remoteSurvey?.id) {
			console.log(`creating ${surveyKey}: ${JSON.stringify(localSurveyResponse)} in db`);
			yield call([ loveDb, 'post' ], `/survey/${userId}/survey/`, surveyBody);
			return;
		}

		// If we have a response locally and remotely, but they don't match, update remote response to match local.
		if (localSurveyResponse && remoteSurvey?.id && localSurveyResponse !== remoteSurvey.survey_response) {
			console.log(`updating ${surveyKey}: ${localSurveyResponse} in db (was ${remoteSurvey.survey_response})`);
			yield call([ loveDb, 'put' ], `/survey/${userId}/survey/${surveyKey}`, surveyBody);
			return;
		}

		// If we have a response remotely but not locally, update the local response.  This should only happen when a user has previously logged out.
		if (!localSurveyResponse && remoteSurvey) {
			const course = CourseFromNumber[courseNumber];
			const step = StepFromNumber[stepNumber];
			const day = DayFromNumber[dayNumber];

			console.log(`updating ${course} ${step} ${day} ${surveyKey}: ${remoteSurvey.survey_response} from db`);

			// special cases: step 0 indicates onboarding, day 0 indicates an activities survey
			switch (0) {
				case stepNumber: // onboarding
					yield put(setOnboardingSurveyResponse(surveyKey, JSON.parse(remoteSurvey.survey_response)));
					break;
				case dayNumber: // activities
					yield put(setStepActivityResponse(
						CourseFromNumber[courseNumber],
						StepFromNumber[stepNumber],
						surveyKey as Activities,
						remoteSurvey.survey_response,
					));
					break;
				default: // daily surveys
					yield put(setDaySurveyResponse(course, step, day, surveyKey, localSurveyResponse as SurveyResponse));
			}
		}
	} catch (error) {
		console.error('error syncing survey:', { surveyBody, remoteSurvey }, error);
	}
}

export function* watchForSyncSurveys() {
	yield takeEvery(syncSurveys, function*() {
		const userId = yield select(getUserId);
		const localSurveys = yield select(getAllSurveys);
		let remoteSurveys: RemoteSurvey[] = [];

		try {
			const surveyResponse = yield call([ loveDb, 'get' ], `survey/${userId}/survey`);
			remoteSurveys = surveyResponse?.data || [];
		} catch (error) {
			console.error(error);
			return;
		}

		// Sync onboarding
		for (const key of Object.keys(localSurveys.onboarding)) {
			const onboardingResponse = localSurveys.onboarding[key];
			const remoteSurvey = remoteSurveys.find(s => s.step === 0 && s.survey_id === key);

			// onboarding surveys are considered to be course 1, step 0, day 0
			yield call(syncSurvey, {
				userId,
				surveyKey: key,
				courseNumber: 1,
				stepNumber: 0,
				dayNumber: 0,
				localSurveyResponse: onboardingResponse,
				remoteSurvey,
			});
		}

		// sync step/day level surveys
		for (const step of AllSteps) {
			const course = CourseFromStep[step];
			const courseNumber = NumberFromCourse[course];
			const stepNumber = NumberFromStep[step];
			// step-level surveys
			const stepSurveys = Object.keys(localSurveys?.[course]?.[step] || {})
				?.filter(key => !DayFromNumber.includes(key as Days)) || [];

			for (const key of stepSurveys) {
				const stepResponse = localSurveys[course][step][key];
				const remoteSurvey = remoteSurveys.find(s => {
					return s.course === courseNumber &&
						s.step === stepNumber &&
						s.day === 0 &&
						s.survey_id === key;
				});

				yield call(syncSurvey, {
					userId,
					surveyKey: key,
					courseNumber,
					stepNumber,
					dayNumber: 0, // step-level surveys are on day '0'
					localSurveyResponse: stepResponse,
					remoteSurvey,
				});
			}

			// daily surveys
			for (const day of DayValues) {
				const dayNumber = NumberFromDay[day];
				const dayResponses = localSurveys?.[course]?.[step]?.[day] || [];

				for (const [ key, response ] of Object.entries(dayResponses)) {
					const remoteSurvey = remoteSurveys.find(s => {
						return s.course === courseNumber &&
									s.step === stepNumber &&
									s.day === dayNumber &&
									s.survey_id === key;
					});

					yield call(syncSurvey, {
						userId,
						surveyKey: key,
						courseNumber,
						stepNumber,
						dayNumber,
						localSurveyResponse: response as any,
						remoteSurvey,
					});
				}
			}
		}
	});
}
