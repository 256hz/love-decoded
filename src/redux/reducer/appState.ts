import { createReducer } from '@reduxjs/toolkit';
import { AppStateStatus } from 'react-native';
import {
	logOut,
	setActiveFaqCategory,
	setAppState,
	setCurrentRouteName,
	setLastActiveEpochSeconds,
} from '@redux/action';
import { Screens } from 'route/enums';
import { FaqCategories } from '@redux/types/appState';

export type AppStateState = {
	activeFaqCategory?: string;
	currentRoute?: Screens;
	lastActiveEpochSeconds: number;
	status?: AppStateStatus;
};

const INITIAL_STATE: AppStateState = {
	activeFaqCategory: FaqCategories.App,
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

	addCase(setActiveFaqCategory, (state, { payload: { category } }) => ({
		...state,
		activeFaqCategory: category,
	}));

	addCase(logOut, state => INITIAL_STATE);
});
