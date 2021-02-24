import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './HowCanITell.styles';

export default () => (
	<OnboardingScreen
		audioFilename="onboarding_21_how_can_i_tell.mp3"
		drawShapes={[ 18, 19, 20 ]}
		nextTarget={Screens.NeffSurveyIntro}
		title={'How Can I Tell If this App\nIs Working for Me?'}
		titleContainerStyle={styles.titleContainerStyle}
	>
		<View style={styles.container}>
			<Text style={styles.text}>
				There are 2 Ways to know…
			</Text>
			<Text style={styles.text}>
				1. Your Body and Mind can tell you
			</Text>
			<Text style={styles.text}>
				2. The Scientific Way
			</Text>
		</View>
	</OnboardingScreen>
);
