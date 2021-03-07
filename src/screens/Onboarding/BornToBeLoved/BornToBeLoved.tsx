import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import styles from './BornToBeLoved.styles';

export default () => (
	<OnboardingScreen
		audioFilename="onboarding_17_born_to_be_loved.mp3"
		drawShapes={[ 6, 10 ]}
		nextTarget={OnboardingScreens.SetYourAlertsIntro}
		title="Born To Be Loved"
		titleContainerStyle={styles.titleContainerStyle}
	>
		<View style={styles.container}>
			<Text style={styles.text}>
				Why
				<Text style={[ styles.text, styles.highlightText ]}> Breakfast, Lunch, Dinner </Text>
				and
				<Text style={[ styles.text, styles.highlightText ]}> Bedtime </Text>
				are the Best Times for Learning?
			</Text>
		</View>
	</OnboardingScreen>
);
