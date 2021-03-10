import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import {
	UserProperty, Activity, Day, Step,
} from '@redux/types/user';

const user = (state: State) => (state || {}).user || {};

export const getUserId = createSelector(user, userState => userState[UserProperty.ID]);

export const getUserProgress = createSelector(user, userState => ({
	currentActivity: userState.current_activity as Activity,
	currentDay: userState.current_day as Day,
	currentStep: userState.current_step as Step,
}));

export const getUserFirstName = createSelector(user, ({ first_name }) => first_name);

export const getUserEmail = createSelector(user, ({ email }) => email);
