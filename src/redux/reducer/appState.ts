import { createReducer } from '@reduxjs/toolkit';
import { AppStateStatus } from 'react-native';
import {
	logOut,
	setAppState,
	setCurrentRouteName,
	setLastActiveEpochSeconds,
} from '@redux/action';
import { Screens } from 'route/enums';

export type AppStateState = {
	lastActiveEpochSeconds: number;
	status?: AppStateStatus;
	currentRoute?: Screens;
};

const INITIAL_STATE: AppStateState = {
	lastActiveEpochSeconds: 0,
	status: 'active',
};

export const appState = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setAppState, (state, { payload: { status } }) => ({ ...state, status }));

	addCase(setLastActiveEpochSeconds, (state, { payload: { epochSeconds } }) => ({
		...state, lastActiveEpochSeconds: epochSeconds,
	}));

	addCase(setCurrentRouteName, (state, { payload: { route } }) => ({
		...state,
		currentRoute: route,
	}));

	addCase(logOut, state => INITIAL_STATE);
});
