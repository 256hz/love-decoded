import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Screens } from 'route/OnboardingStack';
import { OnboardingScreen } from '@elements';
import styles from './SetYourAlerts.styles';

const TimePicker = ({
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

		</View>
	);
};

const dayMinutesToTimeString = (dayMinutes: number) => {
	const isPm = dayMinutes >= 12 * 60;
	const hours = Math.floor(dayMinutes / 60) % 12;
	const minutes = (dayMinutes % 60).toString().padStart(2, '0');
	return `${hours}:${minutes} ${isPm ? 'pm' : 'am'}`;
};

const interval = 15;
const intervalsInOneDay = 24 * 60 / interval;
const dropdownChoices = Array.from({ length: intervalsInOneDay }, (_, i) => i * interval).map(minutes => ({
	label: dayMinutesToTimeString(minutes),
	value: minutes,
}));

export default () => {
	const [ morningAlertMinutes, setMorningAlertMinutes ] = useState(5 * 60);
	const [ activitiesAlertMinutes, setActivitiesAlertMinutes ] = useState(11 * 60);
	const [ surveyAlertMinutes, setSurveyAlertMinutes ] = useState(14 * 60);
	const [ reflectionAlertMinutes, setReflectionAlertMinutes ] = useState(17 * 60);

	return (
		<OnboardingScreen
			drawShapes={[ 18, 19, 20 ]}
			nextTarget={Screens.SetYourAlertsThankYou}
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
					/>

					<TimePicker
						headingText="Activities"
						selectedMinutes={activitiesAlertMinutes}
						setSelectedMinutes={setActivitiesAlertMinutes}
					/>

					<TimePicker
						headingText="Survey"
						selectedMinutes={surveyAlertMinutes}
						setSelectedMinutes={setSurveyAlertMinutes}
					/>

					<TimePicker
						headingText="Reflection"
						selectedMinutes={reflectionAlertMinutes}
						setSelectedMinutes={setReflectionAlertMinutes}
					/>

				</View>
			</View>
		</OnboardingScreen>
	);
};
