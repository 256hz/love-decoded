import { createReducer } from '@reduxjs/toolkit';
import {
	loadAudioFile,
	resetAudioPlayer,
	setAudioInfo,
	setAudioIsGettingInfo,
	setAudioIsLoaded,
	setAudioIsPlaying,
	setAudioPlayCompleted,
	setAudioTotalPlayed,
	setAudioPlayedToEndOnScreen,
} from '@redux/action';
import { OnboardingScreens, StepScreens } from 'route/enums';

export type AudioState = {
	audioFilename: string;
	currentTime: number;
	duration: number;
	isActive: boolean;
	isGettingInfo: boolean;
	isLoaded: boolean;
	isPlaying: boolean;
	playCompleted: boolean;
	totalPlayed: number;
	audioEndedScreens?: {
		[key in OnboardingScreens | StepScreens]?: boolean | undefined;
	}
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
	audioEndedScreens: {},
};

export const audio = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setAudioIsLoaded, (state, { payload: { isLoaded } }) => ({ ...state, isLoaded }));

	addCase(setAudioIsPlaying, (state, { payload: { isPlaying } }) => ({ ...state, isPlaying, isActive: true }));

	addCase(setAudioIsGettingInfo, (state, { payload: { isGettingInfo } }) => ({ ...state, isGettingInfo }));

	addCase(setAudioInfo, (state, { payload: { currentTime, duration } }) => ({ ...state, currentTime, duration }));

	addCase(setAudioTotalPlayed, (state, { payload: { totalPlayed } }) => ({ ...state, totalPlayed }));

	addCase(setAudioPlayCompleted, (state, { payload: { playCompleted } }) => ({ ...state, playCompleted }));

	addCase(loadAudioFile, (state, { payload: { audioFilename } }) => ({ ...state, audioFilename }));

	addCase(resetAudioPlayer, (state, { payload: { hardReset } }) => ({
		...INITIAL_STATE,
		isLoaded: state.isLoaded,
		playCompleted: hardReset ? false : state.playCompleted,
		audioFilename: hardReset ? '' : state.audioFilename,
		audioEndedScreens: state.audioEndedScreens,
	}));

	addCase(setAudioPlayedToEndOnScreen, (state, { payload: { screen } }) => {
		const newState = {
			...state,
			audioEndedScreens: {
				...(state.audioEndedScreens || {}),
				[screen]: true,
			},
		};
		console.log({ newState });
		return ({
			...state,
			audioEndedScreens: {
				...(state.audioEndedScreens || {}),
				[screen]: true,
			},
		});
	});
});
