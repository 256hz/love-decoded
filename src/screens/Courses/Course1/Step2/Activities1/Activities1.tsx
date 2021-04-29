import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step2Screens } from 'route/Steps/Course1Screens';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="step2_activities1.mp3"
				nextTarget={Course1Step2Screens.Activities1B}
				// scrollDisabled
			>
				<View style={styles.container}>
					<View style={styles.bodyContainer}>
						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText}>
								When we don’t love ourselves like we deserve - we put up with our own unloving behavior without even realizing it.
							</Text>
						</View>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
