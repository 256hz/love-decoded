import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import {
	Activity, Course, Day, Step, UserProperty,
} from '@redux/types/user';

const user = (state: State) => state.user;

export const getUserId = createSelector(user, userState => userState[UserProperty.Id]);

export const getUserProgress = createSelector(user, userState => ({
	currentCourse: userState.current_course as Course,
	currentStep: userState.current_step as Step,
	currentDay: userState.current_day as Day,
	currentActivity: userState.current_activity as Activity,
}));

export const getUserFirstName = createSelector(user, ({ first_name }) => first_name);

export const getUserEmail = createSelector(user, ({ email }) => email);
