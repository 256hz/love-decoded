import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PlayPauseButton from './PlayPauseButton';
import styles, { TIME_BAR_WIDTH, TIME_DOT_SIZE } from './AudioPlayerBar.styles';

interface AudioPlayerBarProps {
	onTogglePause: () => void;
	isPlaying: boolean;
	isLoaded: boolean;
	currentTime: number;
	duration: number;
}

export default ({ onTogglePause, isPlaying, isLoaded, currentTime, duration }: AudioPlayerBarProps) => {
	const formatAudioText = (seconds: number) => {
		return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
	};

	const timeDotOffset = duration > 0
		? ((TIME_BAR_WIDTH - TIME_DOT_SIZE) * currentTime / duration)
		: 0;

	return (
		<View style={styles.playerContainer}>

			<View style={styles.topButtonsContainer}>
				<TouchableOpacity onPress={onTogglePause}>
					<PlayPauseButton isPlaying={isPlaying} isLoaded={isLoaded} />
				</TouchableOpacity>
			</View>

			<View style={styles.audioBarContainer}>
				<View style={styles.audioBar} />
				<View style={{
					...styles.audioTimeDot,
					left: timeDotOffset,
				}} />
			</View>

			<View style={styles.audioTimeContainer}>
				<Text style={styles.text}>
					{formatAudioText(currentTime)}
				</Text>
			</View>

		</View>
	);
};
