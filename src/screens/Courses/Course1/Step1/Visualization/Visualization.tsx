import { AudioPlayerNavigator } from 'elements';
import React from 'react';
import { View, Text } from 'react-native';
import { CourseScreens } from 'route/enums';
import styles from './Visualization.styles';

export default () => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.headline}>
					{'A Guided\nMeditation / Visualization'}
				</Text>
			</View>
			<AudioPlayerNavigator
				audioFilename="one_second_silence.mp3"
				nextTarget={CourseScreens.GoodJob}
			/>
		</View>
	);
};
