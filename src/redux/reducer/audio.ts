import { createReducer } from '@reduxjs/toolkit';
import {
	setAudioCurrentTime,
	setAudioDuration,
	setAudioFilename,
	setAudioIsLoaded,
	setAudioIsPlaying,
} from '@redux/action';

export type AudioState = {
	currentTime: number;
	duration: number;
	filename: string;
	isLoaded: boolean;
	isPlaying: boolean;
};

const INITIAL_STATE: AudioState = {
	currentTime: 0,
	duration: -1,
	filename: '',
	isLoaded: false,
	isPlaying: false,
};

export const audio = createReducer(INITIAL_STATE, reducer => {
	reducer
		.addCase(setAudioCurrentTime, (state, { payload: { currentTime } }) => ({ ...state, currentTime }))
		.addCase(setAudioDuration, (state, { payload: { duration } }) => ({ ...state, duration }))
		.addCase(setAudioIsLoaded, (state, { payload: { isLoaded } }) => ({ ...state, isLoaded }))
		.addCase(setAudioIsPlaying, (state, { payload: { isPlaying } }) => ({ ...state, isPlaying }))
		.addCase(setAudioFilename, (state, { payload: { filename } }) => ({ ...state, filename }))
	;
});
