import { createSelector } from '@reduxjs/toolkit';
import State from 'redux/RootState';

const appState = (rootState: State) => rootState?.appState || {};

export const getAppState = createSelector(appState, ({ status }) => status);
