import React from 'react';
import { View } from 'react-native';
import PlayButton from '@assets/svg/play-button.svg';
import styles from './AudioPlayerBar.styles';

interface Props {
	isLoaded: boolean;
	isPlaying: boolean;
}

export default ({ isLoaded, isPlaying }: Props) => {
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
