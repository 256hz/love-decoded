import { createReducer } from '@reduxjs/toolkit';
import { AppStateStatus } from 'react-native';
import { setAppState } from 'redux/action';
import { setLastActiveEpochSeconds } from 'redux/action/appState';

export type AppStateState = {
	status?: AppStateStatus;
	lastActiveEpochSeconds: number;
};

const INITIAL_STATE: AppStateState = {
	status: 'active',
	lastActiveEpochSeconds: 0,
};

export const appState = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setAppState, (state, { payload: { status } }) => ({ ...state, status }));
	addCase(setLastActiveEpochSeconds, (state, { payload: { epochSeconds } }) => ({
		...state, lastActiveEpochSeconds: epochSeconds,
	}));
});
