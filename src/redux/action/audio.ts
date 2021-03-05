import { createAction } from '@reduxjs/toolkit';

export const playAudioFile = createAction('LOAD_AUDIO_FILE',
	(filename: string, extension: string) => ({ payload: { filename, extension } }));

export const setAudioIsLoaded = createAction('SET_AUDIO_IS_LOADED',
	(isLoaded: boolean) => ({ payload: { isLoaded } }));

export const setAudioIsPlaying = createAction('SET_AUDIO_IS_PLAYING',
	(isPlaying: boolean) => ({ payload: { isPlaying } }));

export const setAudioIsGettingInfo = createAction('SET_AUDIO_IS_GETTING_INFO',
	(isGettingInfo: boolean) => ({ payload: { isGettingInfo } }));

export const setAudioInfo = createAction('SET_AUDIO_INFO',
	(currentTime: number, duration: number) => ({ payload: { currentTime, duration } }));

export const setAudioTotalPlayed = createAction('SET_AUDIO_TOTAL_PLAYED',
	(totalPlayed: number) => ({ payload: { totalPlayed } }));

export const playAudio = createAction('PLAY_AUDIO');

export const pauseAudio = createAction('PAUSE_AUDIO');

export const rewindAudio = createAction('REWIND_AUDIO');

export const fastForwardAudio = createAction('FAST_FORWARD_AUDIO');

export const resetAudioPlayer = createAction('RESET_AUDIO_PLAYER',
	(clearPlayCompleted?: boolean) => ({ payload: { clearPlayCompleted } }));

export const setCurrentAudioFilename = createAction('SET_CURRENT_AUDIO_FILENAME',
	(filename: string) => ({ payload: { filename } }));

export const setAudioPlayCompleted = createAction('SET_AUDIO_PLAY_COMPLETED',
	(playCompleted: boolean) => ({ payload: { playCompleted } }));

export const stopGettingAudioInfo = createAction('STOP_GETTING_AUDIO_INFO');
