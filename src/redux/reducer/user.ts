import { createReducer } from '@reduxjs/toolkit';
import {
	Activity,
	AgeGroup,
	Course,
	Day,
	Step,
	UserProperty,
} from '@redux/types/user';
import { setUserProperty, logOut, advanceUserActivity } from '@redux/action';

export type UserState = {
	[UserProperty.ID]?: string,
	[UserProperty.FIRST_NAME]?: string,
	[UserProperty.LAST_NAME]?: string,
	[UserProperty.EMAIL]?: string,
	[UserProperty.PASSWORD_HASH]?: string,
	[UserProperty.GENDER]?: string,
	[UserProperty.AGE_GROUP_START]?: AgeGroup,
	[UserProperty.CURRENT_COURSE]: Course,
	[UserProperty.CURRENT_STEP]: Step,
	[UserProperty.CURRENT_DAY]: Day,
	[UserProperty.CURRENT_ACTIVITY]: Activity,
};

const INITIAL_STATE: UserState = {
	[UserProperty.ID]: undefined,
	[UserProperty.FIRST_NAME]: 'Jasmine',
	[UserProperty.LAST_NAME]: '',
	[UserProperty.EMAIL]: 'jasminecook@gmail.com',
	[UserProperty.PASSWORD_HASH]: undefined,
	[UserProperty.GENDER]: undefined,
	[UserProperty.AGE_GROUP_START]: 20,
	[UserProperty.CURRENT_COURSE]: 1,
	[UserProperty.CURRENT_STEP]: 1,
	[UserProperty.CURRENT_DAY]: 1,
	[UserProperty.CURRENT_ACTIVITY]: 1,
};

export const user = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setUserProperty, (state, { payload: { property, value } }) => ({ ...state, [property]: value }));
	addCase(logOut, state => INITIAL_STATE);
	addCase(advanceUserActivity, state => {
		const {
			[UserProperty.CURRENT_ACTIVITY]: activity,
			[UserProperty.CURRENT_DAY]: day,
			[UserProperty.CURRENT_STEP]: step,
			[UserProperty.CURRENT_COURSE]: course,
		} = state;

		console.log({ activity, day, step, course });

		const advanceDay = activity === 4;
		const advanceStep = advanceDay && day === 7;
		const advanceCourse = advanceStep && step === 7;

		return ({
			...state,
			[UserProperty.CURRENT_ACTIVITY]: advanceDay ? 1 : activity + 1 as Activity,
			[UserProperty.CURRENT_DAY]: advanceDay && advanceStep ? 1 : advanceDay ? day + 1 as Day : day,
			[UserProperty.CURRENT_STEP]: advanceStep && advanceCourse ? 1 : advanceStep ? step + 1 as Step : step,
			[UserProperty.CURRENT_COURSE]: advanceCourse ? (course || 1 + 1) as Course : course,
		});
	});
});
