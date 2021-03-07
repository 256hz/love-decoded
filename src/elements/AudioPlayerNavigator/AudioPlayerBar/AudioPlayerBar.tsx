import React, { useState } from 'react';
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

export default ({
	onTogglePause,
	isPlaying,
	isLoaded,
	currentTime,
	duration,
}: AudioPlayerBarProps) => {
	const [ showRemainingTime, setShowRemainingTime ] = useState(false);

	const toggleTimeView = () => {
		setShowRemainingTime(() => !showRemainingTime);
	};

	const formatAudioText = (current: number) => {
		const secondsToShow = showRemainingTime ? duration - current : current;

		const minutes = Math.floor(secondsToShow / 60);
		const secondsString = Math.floor(secondsToShow % 60).toString().padStart(2, '0');

		return `${showRemainingTime ? '-' : ''}${minutes}:${secondsString}`;
	};

	const timeDotOffset = duration > 0
		? ((TIME_BAR_WIDTH - TIME_DOT_SIZE) * currentTime / duration)
		: 0;

	return (
		<View style={styles.playerContainer}>

			<View style={styles.audioBarContainer}>
				<View style={styles.audioBar} />
				<View style={{
					...styles.audioTimeDot,
					left: timeDotOffset,
				}} />
				<TouchableOpacity onPress={onTogglePause} disabled={!isLoaded}>
					<View style={styles.playContainer}>
						<PlayPauseButton isPlaying={isPlaying} isLoaded={isLoaded} />
					</View>
				</TouchableOpacity>
			</View>

			<TouchableOpacity onPress={toggleTimeView}>
				<View style={styles.audioTimeContainer}>
					<Text style={styles.text}>
						{formatAudioText(currentTime)}
					</Text>
				</View>
			</TouchableOpacity>

		</View>
	);
};
