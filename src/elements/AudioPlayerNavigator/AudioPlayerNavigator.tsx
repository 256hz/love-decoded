import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import PlayButton from '@assets/svg/play-button.svg';
import { getCurrentTime, load, pause, play, seek } from 'util/sound';
import styles from './AudioPlayerNavigator.styles';

const PlayOrPauseButton = ({ isPlaying }: { isPlaying: boolean }) => (
	<View style={styles.playButtonContainer}>
		{isPlaying
			? (
				<View style={{ width: 10, height: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
					<View style={{ width: 2, height: 20, backgroundColor: 'black' }} />
					<View style={{ width: 2, height: 20, backgroundColor: 'black' }} />
				</View>
			) : <PlayButton />
		}
	</View>
);

export default () => {
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ playbackTime, setPlaybackTime ] = useState(0);
	// Holds the handle for the setInterval that keeps track of playback time.
	const [ playbackInterval, setPlaybackInterval ] = useState(0);
	const [ sound, setSound ] = useState(load('music.mp3'));

	const togglePause = () => {
		const shouldPlay = !isPlaying;
		console.log({ shouldPlay });

		setIsPlaying(shouldPlay);
		shouldPlay ? play(sound) : pause(sound);
		if (shouldPlay) {

		}
	};

	const seekTo = (seconds: number) => {
		setSound(seek(sound, seconds));
		setPlaybackTime(playbackTime + seconds);
	};

	// useEffect(() => {
	// 	if (playbackInterval == 0) {
	// 		return;
	// 	}

	// 	if (isPlaying) {
	// 		setPlaybackInterval(setInterval(() => {
	// 			setPlaybackTime(getCurrentTime(sound));
	// 		}, 1000));

	// 		return () => clearInterval(playbackInterval);
	// 	} else {
	// 		clearInterval(playbackInterval);
	// 	}
	// }, [ isPlaying ]);

	return (
		<View style={styles.container}>
			<View style={styles.playerContainer}>
				<View style={styles.topButtonsContainer}>

					<TouchableHighlight onPress={togglePause}>
						<PlayOrPauseButton isPlaying={isPlaying} />
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
};
