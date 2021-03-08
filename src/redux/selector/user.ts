import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { UserProperty } from 'redux/types/user';

const user = (state: State) => (state || {}).user || {};

export const getUserId = createSelector(user, userState => userState[UserProperty.ID]);

export const getUserProgress = createSelector(user, userState => ({
	currentActivity: userState.current_activity,
	currentDay: userState.current_day,
	currentStep: userState.current_step,
}));

export const getUserFirstName = createSelector(user, ({ first_name }) => first_name);

export const getUserEmail = createSelector(user, ({ email }) => email);
