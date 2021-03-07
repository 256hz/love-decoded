import { createSelector } from '@reduxjs/toolkit';
import State from 'redux/RootState';

const audio = (state: State) => (state || {}).audio || {};

export const isAudioActive = createSelector(audio, ({ isActive }) => isActive);

export const isAudioLoaded = createSelector(audio, ({ isLoaded }) => isLoaded);

export const isAudioPlaying = createSelector(audio, ({ isPlaying }) => isPlaying);

export const isAudioGettingInfo = createSelector(audio, ({ isGettingInfo }) => isGettingInfo);

export const getAudioTotalPlayed = createSelector(audio, ({ totalPlayed }) => totalPlayed);

export const getAudioPlayCompleted = createSelector(audio, ({ playCompleted }) => playCompleted);

export const getAudioInfo = createSelector(audio,
	({ currentTime, duration }) => ({ currentTime, duration }));
