import { createAction } from '@reduxjs/toolkit';
import { UserProperty } from '@redux/types/user';

export const setUserProperty = createAction('SET_USER_PROPERTY',
	(property: UserProperty, value: string | number) => ({ payload: { property, value } }));

export const logIn = createAction('LOG_IN',
	(username: string, password: string) => ({ payload: { username, password } }));

export const logOut = createAction('LOG_OUT');

export const advanceUserActivity = createAction('ADVANCE_USER_ACTIVITY');

