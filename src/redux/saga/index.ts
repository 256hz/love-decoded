// these are initialized on app start inside getStore.ts
export {
	emitAppStateEventsOnChange,
	watchForAppStateChanges,
} from './appState';


export {
	pauseOnBackground,
	watchForSuccessfulLoad,
	watchForPlayAudioFile,
	watchForPlayAudio,
	watchForPauseAudio,
	// watchForFastForwardAudio,
	// watchForRewindAudio,
	watchForSetAudioPlayCompleted,
	watchForResetAudio,
} from './audio';

export { watchForLogIn } from './user';
