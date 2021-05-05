import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step2Screens } from 'route/Steps/Course1Screens';
import { StepScreen } from '@elements';
import styles from './Activities1B.styles';

export default () => {
	return (
		<StepScreen
			audioFilename="step2_activities1.mp3"
			nextTarget={Course1Step2Screens.Activities2}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Start listening to the way you talk to yourself.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
