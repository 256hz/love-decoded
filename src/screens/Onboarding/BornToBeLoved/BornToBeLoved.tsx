import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './BornToBeLoved.styles';

export default () => (
	<OnboardingScreen
		audioFilename="music128.mp3"
		drawShapes={[ 6, 10 ]}
		nextTarget={Screens.SetYourAlertsIntro}
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
