import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './AudioPlayerNavigator.styles';

const loadSound = (filename: string) => {
	const Sound = require('react-native-sound');
	Sound.setCategory('Playback');
	return new Sound(filename, Sound.MAIN_BUNDLE, error => {
		if (error) {
			console.error('failed to load sound');
		}
	});
};

export default () => {
	const playSound = sound => {
		sound.play(success => {
			success
				? console.log('playback succeeded')
				: console.log('playback failed');
		});
	};

	const [ playbackTime, setPlaybackTime ] = useState();
	const sound = loadSound('music.mp3');

	return (
		<View style={styles.container}>
			<View style={styles.playerContainer}>
				<TouchableHighlight style={styles.playButton} onPress={() => playSound(sound)} />
			</View>
		</View>
	);
};
