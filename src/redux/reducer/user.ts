import { createReducer } from '@reduxjs/toolkit';
import {
	Activity,
	AgeGroup,
	Course,
	Day,
	Step,
	UserProperty,
} from '@redux/types/user';
import {
	setUserProperty, logOut, advanceUserActivity, logIn,
} from '@redux/action';

export type UserState = {
	[UserProperty.Id]?: string,
	[UserProperty.FirstName]?: string,
	[UserProperty.LastName]?: string,
	[UserProperty.Email]?: string,
	[UserProperty.PasswordHash]?: string,
	[UserProperty.Gender]?: string,
	[UserProperty.AgeGroupStart]?: AgeGroup,
	[UserProperty.CurrentCourse]: Course,
	[UserProperty.CurrentStep]: Step,
	[UserProperty.CurrentDay]: Day,
	[UserProperty.CurrentActivity]: Activity,
	[UserProperty.MaxCourse]: Course,
	[UserProperty.MaxStep]: Step,
	[UserProperty.MaxDay]: Day,
	[UserProperty.MaxActivity]: Activity,
};

const INITIAL_STATE: UserState = {
	[UserProperty.Id]: undefined,
	[UserProperty.FirstName]: 'Jasmine',
	[UserProperty.LastName]: '',
	[UserProperty.Email]: 'jasminecook@gmail.com',
	[UserProperty.PasswordHash]: undefined,
	[UserProperty.Gender]: undefined,
	[UserProperty.AgeGroupStart]: 20,
	[UserProperty.CurrentCourse]: 1,
	[UserProperty.CurrentStep]: 1,
	[UserProperty.CurrentDay]: 1,
	[UserProperty.CurrentActivity]: 1,
	[UserProperty.MaxCourse]: 1,
	[UserProperty.MaxStep]: 1,
	[UserProperty.MaxDay]: 1,
	[UserProperty.MaxActivity]: 1,
};

export const user = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setUserProperty, (state, { payload: { property, value } }) => ({ ...state, [property]: value }));

	addCase(logIn, (state, { payload: { username, password } }) => ({ ...state, [UserProperty.Email]: username }));

	addCase(logOut, state => INITIAL_STATE);

	addCase(advanceUserActivity, state => {
		// called at the end of each activity, day, step, and course

		const {
			[UserProperty.CurrentActivity]: currentActivity,
			[UserProperty.CurrentDay]: currentDay,
			[UserProperty.CurrentStep]: currentStep,
			[UserProperty.CurrentCourse]: currentCourse,
			[UserProperty.MaxActivity]: maxActivity,
			[UserProperty.MaxDay]: maxDay,
			[UserProperty.MaxStep]: maxStep,
			[UserProperty.MaxCourse]: maxCourse,
		} = state;

		const advanceDay = currentActivity === 4;
		const advanceStep = advanceDay && currentDay === 7;
		const advanceCourse = advanceStep && currentStep === 7;

		const nextActivity =  advanceDay ? 1 : currentActivity + 1 as Activity;
		const nextDay =   advanceDay && advanceStep ? 1 : advanceDay ? currentDay + 1 as Day : currentDay;
		const nextStep =  advanceStep && advanceCourse ? 1 : advanceStep ? currentStep + 1 as Step : currentStep;
		const nextCourse =   advanceCourse ? (currentCourse || 1 + 1) as Course : currentCourse;

		return ({
			...state,
			[UserProperty.CurrentActivity]: nextActivity,
			[UserProperty.CurrentDay]: nextDay,
			[UserProperty.CurrentStep]: nextStep,
			[UserProperty.CurrentCourse]: nextCourse,
			[UserProperty.MaxActivity]: nextActivity > maxActivity ? nextActivity : maxActivity,
			[UserProperty.MaxDay]: nextDay > maxDay ? nextDay : maxDay,
			[UserProperty.MaxStep]: nextStep > maxStep ? nextStep : maxStep,
			[UserProperty.MaxCourse]: nextCourse > maxCourse ? nextCourse : maxCourse,
		});
	});
});
