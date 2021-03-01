import { createReducer } from '@reduxjs/toolkit';
import {
	resetAudioPlayer,
	setAudioInfo,
	setAudioIsGettingInfo,
	setAudioIsLoaded,
	setAudioIsPlaying,
	setAudioPlayCompleted,
	setAudioTotalPlayed,
} from '@redux/action';

export type AudioState = {
	currentTime: number;
	duration: number;
	isGettingInfo: boolean;
	isLoaded: boolean;
	isPlaying: boolean;
	playCompleted: boolean;
	totalPlayed: number;
};

const INITIAL_STATE = {
	currentTime: 0,
	duration: 0,
	isGettingInfo: false,
	isLoaded: false,
	isPlaying: false,
	playCompleted: false,
	totalPlayed: 0,
};

export const audio = createReducer(INITIAL_STATE, reducer => {
	reducer.addCase(setAudioIsLoaded, (state, { payload: { isLoaded } }) => ({ ...state, isLoaded }));
	reducer.addCase(setAudioIsPlaying, (state, { payload: { isPlaying } }) => ({ ...state, isPlaying }));
	reducer.addCase(setAudioIsGettingInfo, (state, { payload: { isGettingInfo } }) => ({ ...state, isGettingInfo }));
	reducer.addCase(setAudioInfo,
		(state, { payload: { currentTime, duration } }) => ({ ...state, currentTime, duration }));
	reducer.addCase(setAudioTotalPlayed, (state, { payload: { totalPlayed } }) => ({ ...state, totalPlayed }));
	reducer.addCase(setAudioPlayCompleted, (state, { payload: { playCompleted } }) => ({ ...state, playCompleted }));
	reducer.addCase(resetAudioPlayer, state => INITIAL_STATE);
});
