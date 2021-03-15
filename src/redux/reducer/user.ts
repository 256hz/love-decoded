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
};

export const user = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setUserProperty, (state, { payload: { property, value } }) => ({ ...state, [property]: value }));
	addCase(logIn, (state, { payload: { username, password } }) => ({ ...state, [UserProperty.Email]: username }));
	addCase(logOut, state => INITIAL_STATE);
	addCase(advanceUserActivity, state => {
		const {
			[UserProperty.CurrentActivity]: activity,
			[UserProperty.CurrentDay]: day,
			[UserProperty.CurrentStep]: step,
			[UserProperty.CurrentCourse]: course,
		} = state;

		const advanceDay = activity === 4;
		const advanceStep = advanceDay && day === 7;
		const advanceCourse = advanceStep && step === 7;

		return ({
			...state,
			[UserProperty.CurrentActivity]: advanceDay ? 1 : activity + 1 as Activity,
			[UserProperty.CurrentDay]: advanceDay && advanceStep ? 1 : advanceDay ? day + 1 as Day : day,
			[UserProperty.CurrentStep]: advanceStep && advanceCourse ? 1 : advanceStep ? step + 1 as Step : step,
			[UserProperty.CurrentCourse]: advanceCourse ? (course || 1 + 1) as Course : course,
		});
	});
});
