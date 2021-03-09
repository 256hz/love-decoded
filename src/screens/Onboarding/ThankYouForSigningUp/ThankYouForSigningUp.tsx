import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import styles from './ThankYouForSigningUp.styles';

export default () => (
	<OnboardingScreen
		drawShapes={[ 6, 10 ]}
		hideBackButton
		nextTarget={OnboardingScreens.LetTheAppTeachYou}
	>
		<View style={styles.container}>
			<Text style={styles.headlineText}>
				Thank You For Signing Up!
			</Text>
		</View>
	</OnboardingScreen>
);
