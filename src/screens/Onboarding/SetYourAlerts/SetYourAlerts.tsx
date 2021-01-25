import React, { useState } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Screens } from 'route/OnboardingStack';
import { OnboardingScreen } from '@elements';
import styles from './SetYourAlerts.styles';

const TimePicker = ({
	hasError,
	headingText,
	selectedMinutes,
	setSelectedMinutes,
}) => {
	return (
		<View style={styles.selectorContainer}>
			<Text style={styles.timePickerHeadingText}>{headingText}</Text>

			<View style={styles.timePickerContainer}>
				<View style={[ styles.textInput ]}>
					<RNPickerSelect
						placeholder={{ label:'time', key: 'time', inputLabel: 'time' }}
						items={dropdownChoices}
						value={selectedMinutes}
						onValueChange={setSelectedMinutes}
						style={{
							placeholder: styles.placeholderText,
							inputIOS: { ...styles.placeholderText, ...styles.text },
							inputAndroid: { ...styles.placeholderText, ...styles.text },
						}}
					/>
				</View>
			</View>

			{ hasError && (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>Must be later than the time above it.</Text>
				</View>
			)}
		</View>
	);
};

const dayMinutesToTimeString = (dayMinutes: number) => {
	const isPm = dayMinutes >= 12 * 60;
	const hours = Math.floor(dayMinutes / 60) % 12 || 12;
	const minutes = (dayMinutes % 60).toString().padStart(2, '0');
	return `${hours}:${minutes} ${isPm ? 'pm' : 'am'}`;
};

const intervalMinutes = 15;
const intervalsInOneDay = 24 * 60 / intervalMinutes;
const dropdownChoices = Array.from({ length: intervalsInOneDay }, (_, i) => i * intervalMinutes)
	.map(minutes => ({
		label: dayMinutesToTimeString(minutes),
		value: minutes,
	}));

export default () => {
	const [ morningAlertMinutes, setMorningAlertMinutes ] = useState(5 * 60);
	const [ activitiesAlertMinutes, setActivitiesAlertMinutes ] = useState(11 * 60);
	const [ surveyAlertMinutes, setSurveyAlertMinutes ] = useState(14 * 60);
	const [ reflectionAlertMinutes, setReflectionAlertMinutes ] = useState(17 * 60);

	const isNextEnabled = morningAlertMinutes < activitiesAlertMinutes
		&& activitiesAlertMinutes < surveyAlertMinutes
		&& surveyAlertMinutes < reflectionAlertMinutes;

	return (
		<OnboardingScreen
			drawShapes={[ 18, 19, 20 ]}
			nextTarget={Screens.SetYourAlertsThankYou}
			nextEnabled={isNextEnabled}
			title="Set Your Alerts"
		>
			<View style={styles.container}>
				<Text style={styles.subtitleText}>
					tap the time to change it
				</Text>

				<View style={styles.pickersContainer}>

					<TimePicker
						headingText="Morning"
						selectedMinutes={morningAlertMinutes}
						setSelectedMinutes={setMorningAlertMinutes}
						hasError={false}
					/>

					<TimePicker
						headingText="Activities"
						selectedMinutes={activitiesAlertMinutes}
						setSelectedMinutes={setActivitiesAlertMinutes}
						hasError={activitiesAlertMinutes <= morningAlertMinutes}
					/>

					<TimePicker
						headingText="Survey"
						selectedMinutes={surveyAlertMinutes}
						setSelectedMinutes={setSurveyAlertMinutes}
						hasError={surveyAlertMinutes <= activitiesAlertMinutes}
					/>

					<TimePicker
						headingText="Reflection"
						selectedMinutes={reflectionAlertMinutes}
						setSelectedMinutes={setReflectionAlertMinutes}
						hasError={reflectionAlertMinutes <= surveyAlertMinutes}
					/>

				</View>
			</View>
		</OnboardingScreen>
	);
};
