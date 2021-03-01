import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/enums';
import styles from './HavingTheLovingCommunities.styles';

export default () => (
	<OnboardingScreen
		drawShapes={[ 1, 7, 11 ]}
		audioFilename="onboarding_4_unconditional_community.mp3"
		nextTarget={Screens.WhenYouForget}
	>
		<View style={styles.container}>
			<Text style={styles.headline}>
				Having The Unconditionally Loving Communities You Deserve
			</Text>
		</View>
	</OnboardingScreen>
);
