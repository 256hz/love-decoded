import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';
import { useSelector } from 'react-redux';
import { getAlertTime } from '@redux/selector';
import { AlertTime } from '@redux/types/alerts';
import styles from './SetYourAlertsThankYou.styles';

const timeWithoutTimezoneToDisplayString = (timeWithoutTimezone: string) => {
	const [ hours, minutes ] = timeWithoutTimezone.split(':');
	const isAm = parseInt(hours) < 12;
	return `${parseInt(hours) % 12 || 12}:${minutes} ${isAm ? 'am' : 'pm'}`;
};

export default () => {
	const morningAlertTime = useSelector(getAlertTime(AlertTime.Morning));
	const activitiesAlertTime = useSelector(getAlertTime(AlertTime.Activities));
	const surveyAlertTime = useSelector(getAlertTime(AlertTime.Survey));
	const reflectionAlertTime = useSelector(getAlertTime(AlertTime.Reflection));

	return (
		<OnboardingScreen
			drawShapes={[ 18, 19, 20 ]}
			nextTarget={OnboardingScreens.HowCanITell}
			title={'Thank You For Setting\nYour Alerts!'}
		>
			<View style={styles.container}>
				<View>
					<Text style={[ styles.text, styles.headline ]}>Here is an Overview</Text>
					<Text style={[ styles.text, styles.bold ]}>Morning: <Text style={styles.text}>{timeWithoutTimezoneToDisplayString(morningAlertTime)}</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>Activities: <Text style={styles.text}>{timeWithoutTimezoneToDisplayString(activitiesAlertTime)}</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>Survey: <Text style={styles.text}>{timeWithoutTimezoneToDisplayString(surveyAlertTime)}</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>Reflection: <Text style={styles.text}>{timeWithoutTimezoneToDisplayString(reflectionAlertTime)}</Text></Text>
					<Text style={styles.subtitle}>You can change the alert times later in your account settings.</Text>
				</View>
			</View>
		</OnboardingScreen>
	);
};
