import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';

const appState = (rootState: State) => rootState?.appState || {};

export const getAppState = createSelector(appState, app => app.status);

export const getLastActiveEpochSeconds = createSelector(appState, app => app.lastActiveEpochSeconds);

export const getCurrentRouteName = createSelector(appState, app => app.currentRoute);
