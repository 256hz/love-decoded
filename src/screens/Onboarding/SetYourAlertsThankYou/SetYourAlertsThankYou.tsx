import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';
import { useSelector } from 'react-redux';
import { getAlertTime } from 'redux/selector';
import { AlertTime } from 'redux/types/alerts';
import styles from './SetYourAlertsThankYou.styles';
import { dayMinutesToTimeString } from '../SetYourAlerts/SetYourAlerts';

export default () => {
	const morningAlertMinutes = useSelector(getAlertTime(AlertTime.Morning));
	const activitiesAlertMinutes = useSelector(getAlertTime(AlertTime.Activities));
	const surveyAlertMinutes = useSelector(getAlertTime(AlertTime.Survey));
	const reflectionAlertMinutes = useSelector(getAlertTime(AlertTime.Reflection));

	return (
		<OnboardingScreen
			drawShapes={[ 18, 19, 20 ]}
			nextTarget={OnboardingScreens.HowCanITell}
			title={'Thank You For Setting\nYour Alerts!'}
		>
			<View style={styles.container}>
				<View>
					<Text style={[ styles.text, styles.headline ]}>Here is an Overview</Text>
					<Text style={[ styles.text, styles.bold ]}>Morning: <Text style={styles.text}>{dayMinutesToTimeString(morningAlertMinutes)}</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>Activities: <Text style={styles.text}>{dayMinutesToTimeString(activitiesAlertMinutes)}</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>Survey: <Text style={styles.text}>{dayMinutesToTimeString(surveyAlertMinutes)}</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>Reflection: <Text style={styles.text}>{dayMinutesToTimeString(reflectionAlertMinutes)}</Text></Text>
					<Text style={styles.subtitle}>You can change the alert times later in your account settings.</Text>
				</View>
			</View>
		</OnboardingScreen>
	);
};
