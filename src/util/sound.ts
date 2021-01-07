const Sound = require('react-native-sound');

export const load = (filename: string) => {
	Sound.setCategory('Playback');
	return new Sound(filename, Sound.MAIN_BUNDLE, (error: Error) => error
		? console.error('failed to load sound:', error)
		: console.log('load succeeded'),
	);
};

export const play = (sound: typeof Sound) => {
	sound.play((success: boolean) => success
		? console.log('playback succeeded')
		: console.error('playback failed'),
	);
};

export const pause = (sound: typeof Sound) => sound.pause();

// In seconds
export const getCurrentTime = (sound: typeof Sound): number => sound.getCurrentTime();

export const seek = (sound: typeof Sound, seconds: number): typeof Sound => {
	sound.setCurrentTime(sound.getCurrentTime() + seconds);
	return sound;
};
