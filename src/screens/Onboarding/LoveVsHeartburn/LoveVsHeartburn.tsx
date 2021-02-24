import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './LoveVsHeartburn.styles';

export default () => (
	<OnboardingScreen
		audioFilename="onboarding_14_love_vs_heartburn.mp3"
		drawShapes={[ 1, 7, 11 ]}
		nextTarget={Screens.Dependency}
	>
		<View style={styles.container}>
			<Text style={styles.text}>
				Love vs. Heartburn
			</Text>

		</View>
	</OnboardingScreen>
);
