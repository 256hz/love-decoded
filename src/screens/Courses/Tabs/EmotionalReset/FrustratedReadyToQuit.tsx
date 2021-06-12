import React from 'react';
import { Text, View } from 'react-native';
import { EmotionalResetScreens } from 'route/enums';
import { StepScreen } from '@elements';
import styles from './EmotionalReset.styles';

export default () => {
	return (
		<StepScreen
			audioFilename="onboarding_38c_erb_ready_to_quit.mp3"
			hideBackButton
			hideNextButton
			nextTarget={EmotionalResetScreens.Root}
		>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					Ready to quit on yourself and the App?
				</Text>
			</View>
		</StepScreen>
	);
};
