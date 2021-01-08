import { createAction } from '@reduxjs/toolkit';

export const setAudioFilename = createAction('SET_AUDIO_FILENAME',
	(filename: string) => ({ payload: { filename } }));

export const setAudioCurrentTime = createAction('SET_AUDIO_CURRENT_TIME',
	(currentTime: number) => ({ payload: { currentTime } }));

export const setAudioDuration = createAction('SET_AUDIO_DURATION',
	(duration: number) => ({ payload: { duration } }));

export const setAudioIsPlaying = createAction('SET_AUDIO_IS_PLAYING',
	(isPlaying: boolean) => ({ payload: { isPlaying } }));

export const setAudioIsLoaded = createAction('SET_AUDIO_IS_LOADED',
	(isLoaded: boolean) => ({ payload: { isLoaded } }));
