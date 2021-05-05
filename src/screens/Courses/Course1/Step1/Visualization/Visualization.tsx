import { AudioPlayerNavigator } from 'elements';
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserProgress } from 'redux/selector';
import { stepGoodJobScreen } from 'route/enums';
import styles from './Visualization.styles';

export default () => {
	const { currentCourse, currentStep } = useSelector(getUserProgress);

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.headline}>
					{'A Guided\nMeditation / Visualization'}
				</Text>
			</View>
			<AudioPlayerNavigator
				audioFilename="one_second_silence.mp3"
				nextTarget={stepGoodJobScreen[currentCourse][currentStep]}
			/>
		</View>
	);
};
