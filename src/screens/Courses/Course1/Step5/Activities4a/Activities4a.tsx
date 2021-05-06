import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import { StepScreen } from '@elements';
import styles from './Activities4a.styles';

export default () => {
	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step5Screens.Activities4b}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Attitude - You can change the outcome of a communication if you change your attitude.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
