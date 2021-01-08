import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';

const audio = (state: State) => (state || {}).audio || {};

export const getAudioDuration = createSelector(audio, audioState => audioState.duration);
export const getAudioFilename = createSelector(audio, audioState => audioState.filename);
export const getAudioIsLoaded = createSelector(audio, audioState => audioState.isLoaded);
export const getAudioIsPlaying = createSelector(audio, audioState => audioState.isPlaying);
export const getAudioCurrentTime = createSelector(audio, audioState => audioState.currentTime);
