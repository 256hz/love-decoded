import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import PlayButton from '@assets/svg/play-button.svg';

import styles, { TIME_BAR_WIDTH, TIME_DOT_SIZE } from './AudioPlayerNavigator.styles';

const PlayOrPauseButton = ({ isLoaded, isPlaying }) => {
	if (!isLoaded) {
		return (
			<View style={styles.playButtonContainer}>
				<View style={styles.playLoading} />
			</View>
		);
	}

	return (
		<View style={styles.playButtonContainer}>
			{isPlaying
				? (
					<View style={styles.pauseContainer}>
						<View style={styles.pauseLine} />
						<View style={styles.pauseLine} />
					</View>
				)
				: <PlayButton />
			}
		</View>
	);
};

export default () => {
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ currentTime, setCurrentTime ] = useState(0);
	const [ duration, setDuration ] = useState(0);
	const [ playedToEnd, setPlayedToEnd ] = useState(false);

	const getInfoTimer = useRef<number>();

	const onFinishLoad = useRef(SoundPlayer.addEventListener('FinishedLoadingFile', ({ success, name, type }) => {
		console.log('finished loading file:', { success, name, type });
		console.log(getInfoTimer.current);
		setIsLoaded(true);
		SoundPlayer.seek(315);
		if (!getInfoTimer.current) {
			getInfoTimer.current = setInterval(async () => {
				await getInfo();
			}, 100);
		}

		onFinishLoad.current.remove();
	}));

	const onFinishPlay = useRef(SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
		console.log('finished playing', success);
		SoundPlayer.pause();
		SoundPlayer.seek(duration - 0.5);
		setIsPlaying(false);
		setCurrentTime(duration - 0.5);
		setPlayedToEnd(true);

		onFinishPlay.current.remove();
	}));

	const getInfo = async () => {
		try {
			const { duration: newDuration, currentTime: newCurrentTime } = await SoundPlayer.getInfo();
			setDuration(newDuration);
			setCurrentTime(newCurrentTime);
			// if (newCurrentTime >= newDuration - 1) {
			// 	onPlayedToEnd();
			// }
			// console.log('getInfo', { newDuration, newCurrentTime });
		} catch (e) {
			console.error('There is no song playing', e);
		}
	};

	const togglePause = () => {
		if (isPlaying) {
			SoundPlayer.pause();
			setIsPlaying(false);
		} else if (isLoaded) {
			SoundPlayer.play();
			setIsPlaying(true);
		}
	};

	const formatAudioText = (seconds: number) => {
		return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
	};

	useEffect(() => {
		SoundPlayer.loadSoundFile('music128', 'mp3');

		return (() => {
			clearInterval(getInfoTimer.current || 0);
			onFinishLoad.current.remove();
			onFinishLoad.current = undefined;
		});
	}, [ onFinishLoad ]);

	const timeDotOffset = duration > 0
		? ((TIME_BAR_WIDTH - TIME_DOT_SIZE) * currentTime / duration)
		: 0;

	return (
		<View style={styles.container}>
			<View style={styles.playerContainer}>

				<View style={styles.topButtonsContainer}>
					<TouchableOpacity onPress={togglePause}>
						<PlayOrPauseButton isPlaying={isPlaying} isLoaded={isLoaded} />
					</TouchableOpacity>
				</View>

				<View style={styles.audioBarContainer}>
					<View
						style={styles.audioBar}
					/>
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
		</View>
	);
};
