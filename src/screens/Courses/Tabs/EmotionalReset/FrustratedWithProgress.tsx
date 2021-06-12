import React from 'react';
import { Text, View } from 'react-native';
import { EmotionalResetScreens } from 'route/enums';
import { StepScreen } from '@elements';
import styles from './EmotionalReset.styles';

export default () => {
	return (
		<StepScreen
			audioFilename="onboarding_38a_erb_frustrated_with_yourself.mp3"
			hideBackButton
			hideNextButton
			nextTarget={EmotionalResetScreens.Root}
		>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					Frustrated with your progress? Something making you sad?
				</Text>
			</View>
		</StepScreen>
	);
};
