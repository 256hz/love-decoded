import { OnboardingScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './EmotionalResetButton.styles';

export default () => (
	<OnboardingScreen
		audioFilename="music128.mp3"
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
