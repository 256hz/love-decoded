import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import NextArrow from '@assets/svg/next-arrow.svg';
// import BackArrow from '@assets/svg/back-arrow.svg';
import PlayPauseButton from './PlayPauseButton';
import styles, { TIME_BAR_WIDTH, TIME_DOT_SIZE } from './AudioPlayerBar.styles';

interface AudioPlayerBarProps {
	// onRewind: () => void;
	// onFastForward: () => void;
	onTogglePause: () => void;
	isPlaying: boolean;
	isLoaded: boolean;
	currentTime: number;
	duration: number;
}

export default ({
	// onRewind,
	// onFastForward,
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

			{/* FF/RW - out for now
			<View style={styles.topButtonsContainer}>
				<View style={styles.placeholderContainer} />

				<View style={styles.seekContainer}>
					<TouchableOpacity onPress={onRewind}>
						<View style={styles.seekButton}>
							<BackArrow /><BackArrow />
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={onFastForward}>
						<View style={styles.seekButton}>
							<NextArrow /><NextArrow />
						</View>
					</TouchableOpacity>
				</View>

				<TouchableOpacity onPress={onTogglePause}>
					<View style={styles.playContainer}>
						<PlayPauseButton isPlaying={isPlaying} isLoaded={isLoaded} />
					</View>
				</TouchableOpacity>
			</View>
			*/}

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
