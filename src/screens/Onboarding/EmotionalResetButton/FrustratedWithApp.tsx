import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './EmotionalResetButton.styles';

export default () => (
	<OnboardingScreen
		audioFilename="onboarding_38b_erb_frustrated_with_the_app.mp3"
		drawShapes={[ 7, 25 ]}
		hideNextButton={true}
		nextTarget={Screens.BriefOverviewOfButtons}
		title="Emotional RESET Button"
		titleContainerStyle={styles.frustratedTitleContainerStyle}
	>
		<View style={styles.container}>
			<Text style={styles.text}>
				Frustrated with the app technology?
			</Text>
		</View>
	</OnboardingScreen>
);
