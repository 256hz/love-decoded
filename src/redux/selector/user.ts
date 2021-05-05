import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { CourseFromNumber, StepFromNumber, DayFromNumber } from 'redux/types/survey';
import { UserProperty } from '@redux/types/user';

const user = (state: State) => state.user;

export const getUserId = createSelector(user, userState => userState[UserProperty.Id]);

export const getUserProgressNumbers = createSelector(user, userState => ({
	currentCourseNumber: userState[UserProperty.CurrentCourse],
	currentStepNumber: userState[UserProperty.CurrentStep],
	currentDayNumber: userState[UserProperty.CurrentDay],
	currentActivityNumber: userState[UserProperty.CurrentActivity],
}));

export const getUserProgress = createSelector(user, userState => ({
	currentCourse: CourseFromNumber[userState[UserProperty.CurrentCourse]],
	currentStep: StepFromNumber[userState[UserProperty.CurrentStep]],
	currentDay: DayFromNumber[userState[UserProperty.CurrentDay]],
	currentActivity: userState[UserProperty.CurrentActivity],
}));

export const getUserMaxProgressNumbers = createSelector(user, userState => ({
	maxCourseNumber: userState[UserProperty.MaxCourse],
	maxStepNumber: userState[UserProperty.MaxStep],
	maxDayNumber: userState[UserProperty.MaxDay],
	maxActivityNumber: userState[UserProperty.MaxActivity],
}));

export const getUserMaxProgress = createSelector(user, userState => ({
	maxCourse: CourseFromNumber[userState[UserProperty.MaxCourse]],
	maxStep: StepFromNumber[userState[UserProperty.MaxStep]],
	maxDay: DayFromNumber[userState[UserProperty.MaxDay]],
	maxActivity: userState[UserProperty.MaxActivity],
}));

export const getUserFirstName = createSelector(user, ({ first_name }) => first_name);

export const getUserEmail = createSelector(user, ({ email }) => email);
