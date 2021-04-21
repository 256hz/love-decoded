import { createReducer } from '@reduxjs/toolkit';
import {
	Activity,
	AgeGroup,
	CourseNumber,
	DayNumber,
	StepNumber,
	UserProperty,
} from '@redux/types/user';
import {
	advanceUserActivity as advanceUserProgress,
	logOut,
	logIn,
	setUserProperty,
	setUserProgress,
} from '@redux/action';

export type UserState = {
	[UserProperty.Id]?: string,
	[UserProperty.FirstName]?: string,
	[UserProperty.LastName]?: string,
	[UserProperty.Email]?: string,
	[UserProperty.PasswordHash]?: string,
	[UserProperty.Gender]?: string,
	[UserProperty.AgeGroupStart]?: AgeGroup,
	[UserProperty.CurrentCourse]: CourseNumber,
	[UserProperty.CurrentStep]: StepNumber,
	[UserProperty.CurrentDay]: DayNumber,
	[UserProperty.CurrentActivity]: Activity,
	[UserProperty.MaxCourse]: CourseNumber,
	[UserProperty.MaxStep]: StepNumber,
	[UserProperty.MaxDay]: DayNumber,
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

	addCase(setUserProgress, (state, { payload: { course, step, day, activity } }) => ({
		...state,
		[UserProperty.CurrentCourse]: course,
		[UserProperty.CurrentStep]: step,
		[UserProperty.CurrentDay]: day,
		[UserProperty.CurrentActivity]: activity,
	}));

	addCase(advanceUserProgress, state => {
		// called at the end of each activity, day, step, and course

		const {
			[UserProperty.CurrentCourse]: currentCourse,
			[UserProperty.CurrentStep]: currentStep,
			[UserProperty.CurrentDay]: currentDay,
			[UserProperty.CurrentActivity]: currentActivity,
			[UserProperty.MaxCourse]: maxCourse,
			[UserProperty.MaxStep]: maxStep,
			[UserProperty.MaxDay]: maxDay,
			[UserProperty.MaxActivity]: maxActivity,
		} = state;

		const advanceDay = currentActivity === 4;
		const advanceStep = advanceDay && currentDay === 7;
		const advanceCourse = advanceStep && currentStep === 7;

		// rolls activities, days, etc. back to 1 as days, steps, etc. are increased
		const nextActivity = advanceDay ? 1 : currentActivity + 1 as Activity;
		const nextDay = advanceDay && advanceStep ? 1 : advanceDay ? currentDay + 1 as DayNumber : currentDay;
		const nextStep = advanceStep && advanceCourse ? 1 : advanceStep ? currentStep + 1 as StepNumber : currentStep;
		const nextCourse = advanceCourse ? (currentCourse || 1 + 1) as CourseNumber : currentCourse;

		return ({
			...state,
			[UserProperty.CurrentCourse]: nextCourse,
			[UserProperty.CurrentStep]: nextStep,
			[UserProperty.CurrentDay]: nextDay,
			[UserProperty.CurrentActivity]: nextActivity,
			// also increase the max if new progress is made (i.e. the user is not reviewing content)
			[UserProperty.MaxCourse]: nextCourse > maxCourse ? nextCourse : maxCourse,
			[UserProperty.MaxStep]: nextStep > maxStep ? nextStep : maxStep,
			[UserProperty.MaxDay]: nextDay > maxDay ? nextDay : maxDay,
			[UserProperty.MaxActivity]: nextActivity > maxActivity ? nextActivity : maxActivity,
		});
	});
});
