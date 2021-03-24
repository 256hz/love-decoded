import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import { CardCarousel, OnboardingScreen } from '@elements';
import styles from './SetYourAlertsIntro.styles';

const cards = [
	{
		title: 'Intentions Alert',
		body: 'Connect nourishing yourself with breakfast – 25-30 seconds. A healthy one says , ‘I love myself’!  Before 10 am.',
	},
	{
		title: 'Activities Alert',
		body: 'Connect nourishing yourself with Lunch – 2-3 minutes. A healthy one says ‘I love myself’!  Between 11 am and 2 pm.',
	},
	{
		title: 'Survey Alert',
		body: 'Connect nourishing yourself with dinner – 20-30 seconds. A healthy one says ‘I love myself’!  Between 4 pm and 8 pm.',
	},
	{
		title: 'Nightly Reflection Alert',
		body: 'Connect nourishing yourself with Sleeping – 15-20 seconds. A good rest says ‘I love myself’!  After 8 pm.',
	},
];

export default () => {
	const [ nextEnabled, setNextEnabled ] = useState(false);

	return (
		<OnboardingScreen
			drawShapes={[ 1, 7, 11 ]}
			title="Set Your Alerts"
			audioFilename="onboarding_18_set_your_alerts.mp3"
			nextTarget={OnboardingScreens.SetYourAlerts}
			nextEnabled={nextEnabled}
		>
			<View style={styles.container}>
				<View style={styles.topTextContainer}>
					<Text style={styles.topText}>
						<Text style={[ styles.topText, styles.boldText ]}>Remember </Text> - Love is Nourishment.
					</Text>
					<Text style={styles.topText}>
						Your alerts are going to coincide with times you choose to nourish yourself.
					</Text>
					<Text style={styles.footerText}>
						Please read all four cards in order to set your alerts - swipe left to see more.
					</Text>
				</View>

				<View style={styles.cards}>
					<CardCarousel cards={cards} setNextEnabled={setNextEnabled} />
				</View>
			</View>
		</OnboardingScreen>
	);
};
