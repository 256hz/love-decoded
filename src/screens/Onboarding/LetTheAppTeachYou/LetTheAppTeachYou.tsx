import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './LetTheAppTeachYou.styles';

export default () => (
	<OnboardingScreen
		audioFilename="onboarding-13-let-the-app-teach-you.mp3"
		drawShapes={[ 6, 10 ]}
		hideBackButton={true}
		nextTarget={Screens.LoveVsHeartburn}
		title="Let The App Teach You"
		titleContainerStyle={styles.titleContainerStyle}
	>
		<View style={styles.container}>
			<Text style={styles.text}>
				As You Learn to
				<Text style={[ styles.text, styles.highlightText ]}> Love </Text>Yourself…
				You Will Let The App Teach You <Text style={[ styles.text, styles.highlightText ]}>Mastery</Text>.
			</Text>

			<Text style={styles.text}>{'\n'}
				<Text style={[ styles.text, styles.highlightText ]}>You will see </Text>your good qualities, not just your weaknesses.{'\n'}
				<Text style={[ styles.text, styles.highlightText ]}>You will believe </Text>growth and Self Love are possible.
			</Text>
		</View>
	</OnboardingScreen>
);
