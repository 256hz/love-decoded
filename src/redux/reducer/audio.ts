import { createReducer } from '@reduxjs/toolkit';
import {
	playAudio,
	playAudioFile,
	resetAudioPlayer,
	setAudioInfo,
	setAudioIsGettingInfo,
	setAudioIsLoaded,
	setAudioIsPlaying,
	setAudioPlayCompleted,
	setAudioTotalPlayed,
} from '@redux/action';

export type AudioState = {
	audioFilename?: string;
	currentTime: number;
	duration: number;
	isActive: boolean;
	isGettingInfo: boolean;
	isLoaded: boolean;
	isPlaying: boolean;
	playCompleted: boolean;
	totalPlayed: number;
};

const INITIAL_STATE = {
	currentTime: 0,
	duration: 0,
	audioFilename: '',
	isActive: false,
	isGettingInfo: false,
	isLoaded: false,
	isPlaying: false,
	playCompleted: false,
	totalPlayed: 0,
};

export const audio = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setAudioIsLoaded, (state, { payload: { isLoaded } }) => ({ ...state, isLoaded }));
	addCase(setAudioIsPlaying, (state, { payload: { isPlaying } }) => ({ ...state, isPlaying, isActive: true }));
	addCase(setAudioIsGettingInfo, (state, { payload: { isGettingInfo } }) => ({ ...state, isGettingInfo }));
	addCase(setAudioInfo, (state, { payload: { currentTime, duration } }) => ({ ...state, currentTime, duration }));
	addCase(setAudioTotalPlayed, (state, { payload: { totalPlayed } }) => ({ ...state, totalPlayed }));
	addCase(setAudioPlayCompleted, (state, { payload: { playCompleted } }) => ({ ...state, playCompleted }));
	addCase(playAudioFile, (state, { payload: { audioFilename } }) => ({ ...state, audioFilename }));
	addCase(resetAudioPlayer, (state, { payload: { clearPlayCompleted } }) => ({
		...INITIAL_STATE,
		isLoaded: state.isLoaded,
		playCompleted: clearPlayCompleted ? false : state.playCompleted,
		audioFilename: clearPlayCompleted ? '' : state.audioFilename,
	}));
});
