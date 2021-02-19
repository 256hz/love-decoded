import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './ThankYouForSigningUp.styles';

export default () => (
	<OnboardingScreen
		drawShapes={[ 6, 10 ]}
		hideBackButton={true}
		nextTarget={Screens.LetTheAppTeachYou}
	>
		<View style={styles.container}>
			<Text style={styles.headlineText}>
				Thank You For Signing Up!
			</Text>
		</View>
	</OnboardingScreen>
);
