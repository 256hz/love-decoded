import { createAction } from '@reduxjs/toolkit';
import {
	Activity,
	CourseNumber,
	DayNumber,
	StepNumber,
	UserProperty,
} from '@redux/types/user';

export const setUserProperty = createAction('SET_USER_PROPERTY',
	(property: UserProperty, value: string | number) => ({ payload: { property, value } }));

export const logIn = createAction('LOG_IN',
	(email: string, password: string) => ({ payload: { email, password } }));

export const setLoggedInUser = createAction('SET_LOGGED_IN_USER',
	(
		accessToken: string,
		user: { [key in UserProperty]?: string | number },
	) => ({ payload: { accessToken, user } }));

export const logOut = createAction('LOG_OUT');

export const advanceUserProgress = createAction('ADVANCE_USER_PROGRESS');

export const setUserProgress = createAction('SET_USER_PROGRESS',
	(course: CourseNumber, step: StepNumber, day: DayNumber, activity: Activity) => ({
		payload: { course, step, day, activity },
	}));

export const setMaxPurchasedCourse = createAction('SET_MAX_PURCHASED_COURSE',
	(course: CourseNumber) => ({ payload: { course } }));

export const syncJournals = createAction('SYNC_JOURNALS');

export const syncContacts = createAction('SYNC_CONTACTS');

export const syncSurveys = createAction('SYNC_SURVEYS');

export const syncUserData = createAction('SYNC_USER_DATA');

export const syncAllData = createAction('SYNC_ALL_DATA');
