import { createReducer } from '@reduxjs/toolkit';
import { UserProperty } from '@redux/types/user';
import { setUserProperty, logOut } from '@redux/action';

export type UserState = {
	[key in UserProperty]?: string | number;
};

const INITIAL_STATE: UserState = {
	[UserProperty.ID]: undefined,
	[UserProperty.FIRST_NAME]: 'Jasmine',
	[UserProperty.LAST_NAME]: '',
	[UserProperty.EMAIL]: 'jasminecook@gmail.com',
	[UserProperty.PASSWORD_HASH]: undefined,
	[UserProperty.GENDER]: undefined,
	[UserProperty.AGE_GROUP_START]: 20,
	[UserProperty.CURRENT_STEP]: 1,
	[UserProperty.CURRENT_DAY]: 1,
	[UserProperty.CURRENT_ACTIVITY]: 1,
};

export const user = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setUserProperty, (state, { payload: { property, value } }) => ({ ...state, [property]: value }));
	addCase(logOut, state => INITIAL_STATE);
});
