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
	advanceUserProgress,
	logOut,
	setUserProperty,
	setUserProgress,
	setLoggedInUser,
	setMaxPurchasedCourse,
} from '@redux/action';

export type UserState = {
	[UserProperty.AccessToken]?: string,
	[UserProperty.AgeGroupStart]?: AgeGroup,
	[UserProperty.CurrentActivity]: Activity,
	[UserProperty.CurrentCourse]: CourseNumber,
	[UserProperty.CurrentDay]: DayNumber,
	[UserProperty.CurrentStep]: StepNumber,
	[UserProperty.Email]?: string,
	[UserProperty.FirstName]?: string,
	[UserProperty.Gender]?: string,
	[UserProperty.Id]?: string,
	[UserProperty.LastName]?: string,
	[UserProperty.MaxActivity]: Activity,
	[UserProperty.MaxCourse]: CourseNumber,
	[UserProperty.MaxDay]: DayNumber,
	[UserProperty.MaxPurchasedCourse]: CourseNumber,
	[UserProperty.MaxStep]: StepNumber,
	[UserProperty.PasswordHash]?: string,
};

const INITIAL_STATE: UserState = {
	[UserProperty.AccessToken]: '',
	[UserProperty.AgeGroupStart]: 20,
	[UserProperty.CurrentActivity]: 1,
	[UserProperty.CurrentCourse]: 1,
	[UserProperty.CurrentDay]: 1,
	[UserProperty.CurrentStep]: 1,
	[UserProperty.Email]: '',
	[UserProperty.FirstName]: '',
	[UserProperty.Gender]: undefined,
	[UserProperty.Id]: undefined,
	[UserProperty.LastName]: '',
	[UserProperty.MaxActivity]: 1,
	[UserProperty.MaxCourse]: 1,
	[UserProperty.MaxDay]: 1,
	[UserProperty.MaxPurchasedCourse]: 1,
	[UserProperty.MaxStep]: 1,
	[UserProperty.PasswordHash]: undefined,
};

export const user = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setUserProperty, (state, { payload: { property, value } }) => ({ ...state, [property]: value }));

	addCase(setLoggedInUser, (state, { payload: { user, accessToken } }) => ({
		...state,
		[UserProperty.AccessToken]: accessToken,
		[UserProperty.AgeGroupStart]: user.age_group_start as AgeGroup,
		[UserProperty.CurrentActivity]: user.current_activity as Activity,
		[UserProperty.CurrentCourse]: user.current_activity as CourseNumber,
		[UserProperty.CurrentDay]: user.current_day as DayNumber,
		[UserProperty.CurrentStep]: user.current_step as StepNumber,
		[UserProperty.Email]: user.email as string,
		[UserProperty.FirstName]: user.first_name as string,
		[UserProperty.Gender]: user.gender as string,
		[UserProperty.Id]: user.id as string,
		[UserProperty.LastName]: user.last_name as string,
		[UserProperty.MaxActivity]: user.max_activity as Activity,
		[UserProperty.MaxCourse]: user.max_course as CourseNumber,
		[UserProperty.MaxDay]: user.max_day as DayNumber,
		[UserProperty.MaxPurchasedCourse]: user.max_purchased_course as CourseNumber,
		[UserProperty.MaxStep]: user.max_step as StepNumber,
	}));

	addCase(logOut, state => INITIAL_STATE);

	addCase(setUserProgress, (state, { payload: { course, step, day, activity } }) => ({
		...state,
		[UserProperty.CurrentCourse]: course,
		[UserProperty.CurrentStep]: step,
		[UserProperty.CurrentDay]: day,
		[UserProperty.CurrentActivity]: activity,
	}));

	// called at the end of each activity, day, step, and course
	addCase(advanceUserProgress, state => {
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

	addCase(setMaxPurchasedCourse, (state, { payload: { course } }) =>
		({ ...state, [UserProperty.MaxPurchasedCourse]: course }));
});
