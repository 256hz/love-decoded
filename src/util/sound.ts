import Sound from 'react-native-sound';

type SoundReturn = {
	sound: Sound;
	duration: number;
};

export const load = (filename: string): SoundReturn => {
	Sound.setCategory('Playback');
	let duration;

	const sound = new Sound(filename, Sound.MAIN_BUNDLE, (error: Error) => {
		if (error) {
			console.error('failed to load sound:', error);
			return { sound: new Sound(''), duration: 0 };
		}

		console.log('load succeeded');
		duration = sound.getDuration();
		console.log('duration on load:', duration);
		play(sound);
		sound.pause();
	});

	console.log('duration outside cb:', duration);

	return { sound, duration };
};

export const play = (sound: Sound) => {
	sound.play((success: boolean) => success
		? console.log('playback succeeded')
		: console.error('playback failed'),
	);
};
