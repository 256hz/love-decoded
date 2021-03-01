import { createReducer } from '@reduxjs/toolkit';
import { AppStateStatus } from 'react-native';
import { setAppState } from 'redux/action';

export type AppStateState = {
	status?: AppStateStatus;
};

const INITIAL_STATE: AppStateState = {};

export const appState = createReducer(INITIAL_STATE, reducer => {
	reducer.addCase(setAppState, (state, { payload: { status } }) => ({ ...state, status }));
});
