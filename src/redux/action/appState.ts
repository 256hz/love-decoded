import { createAction } from '@reduxjs/toolkit';
import { AppStateStatus } from 'react-native';

export const setAppState = createAction('SET_APP_STATE',
	(status: AppStateStatus) => ({ payload: { status } }));

export const appActivated = createAction('APP_ACTIVATED');

export const appBackgrounded = createAction('APP_BACKGROUNDED');

export const appInactivated = createAction('APP_INACTIVATED');
