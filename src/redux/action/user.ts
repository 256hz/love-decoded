import { createAction } from '@reduxjs/toolkit';
import {
	Activity, CourseNumber, DayNumber, StepNumber, UserProperty,
} from '@redux/types/user';

export const setUserProperty = createAction('SET_USER_PROPERTY',
	(property: UserProperty, value: string | number) => ({ payload: { property, value } }));

export const logIn = createAction('LOG_IN',
	(username: string, password: string) => ({ payload: { username, password } }));

export const logOut = createAction('LOG_OUT');

export const advanceUserProgress = createAction('ADVANCE_USER_PROGRESS');

export const setUserProgress = createAction('SET_USER_PROGRESS',
	(course: CourseNumber, step: StepNumber, day: DayNumber, activity: Activity) => ({ payload: { course, step, day, activity } }));

