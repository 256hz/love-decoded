import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import styles from './LoveVsHeartburn.styles';

export default () => (
	<OnboardingScreen
		audioFilename="onboarding_14_love_vs_heartburn.mp3"
		drawShapes={[ 1, 7, 11 ]}
		nextTarget={OnboardingScreens.Dependency}
		showLogo
	>
		<View style={styles.container}>
			<Text style={styles.text}>
				Love vs. Heartburn
			</Text>

		</View>
	</OnboardingScreen>
);
