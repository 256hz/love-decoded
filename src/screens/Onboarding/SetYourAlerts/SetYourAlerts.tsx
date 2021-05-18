/* eslint-disable object-shorthand */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { OnboardingScreens } from 'route/enums';
import { OnboardingScreen } from '@elements';
import { AlertTime } from '@redux/types/alerts';
import { setAlertTime } from '@redux/action';
import { getAlertTime } from '@redux/selector';
import { apiClient } from 'api/apiConfig';
import styles from './SetYourAlerts.styles';

type TimePickerProps = {
	alertTime: AlertTime;
	hasError: boolean;
	headingText: string;
	selectedMinutes: number;
};

const TimePicker = ({
	alertTime,
	hasError,
	headingText,
	selectedMinutes,
}: TimePickerProps) => {
	const dispatch = useDispatch();

	const onSelectMinutes = (minutes: number) => {
		dispatch(setAlertTime(alertTime, minutes));
		apiClient.post(
			'/users/set_alert/',
			{
				alert_time: alertTime,
				minutes: minutes,
			},
		)
			.then((response) => {
				console.log(response);
			},
			(error) => {
				console.log(error);
			});
	};

	return (
		<View style={styles.selectorContainer}>
			<Text style={styles.timePickerHeadingText}>{headingText}</Text>

			<View style={styles.timePickerContainer}>
				<View style={[ styles.textInput ]}>
					<RNPickerSelect
						placeholder={{ label:'time', key: 'time', inputLabel: 'time' }}
						items={dropdownChoices}
						value={selectedMinutes}
						onValueChange={onSelectMinutes}
						style={{
							placeholder: styles.placeholderText,
							inputIOS: { ...styles.placeholderText, ...styles.text },
							inputAndroid: { ...styles.placeholderText, ...styles.text },
						}}
					/>
				</View>
			</View>

			{ hasError
				? (
					<View style={styles.errorContainer}>
						<Text style={styles.errorText}>Must be later than the time above it.</Text>
					</View>
				)
				: null
			}
		</View>
	);
};

export const dayMinutesToTimeString = (dayMinutes: number) => {
	const isPm = dayMinutes >= 12 * 60;
	const hours = Math.floor(dayMinutes / 60) % 12 || 12;
	const minutes = (dayMinutes % 60).toString().padStart(2, '0');
	return `${hours}:${minutes} ${isPm ? 'pm' : 'am'}`;
};

const intervalMinutes = 10;
const intervalsInOneDay = 24 * 60 / intervalMinutes;
const dropdownChoices = Array.from({ length: intervalsInOneDay }, (_, i) => i * intervalMinutes)
	.map(minutes => ({
		label: dayMinutesToTimeString(minutes),
		value: minutes,
	}));

export default () => {
	const morningAlertMinutes = useSelector(getAlertTime(AlertTime.Morning));
	const activitiesAlertMinutes = useSelector(getAlertTime(AlertTime.Activities));
	const surveyAlertMinutes = useSelector(getAlertTime(AlertTime.Survey));
	const reflectionAlertMinutes = useSelector(getAlertTime(AlertTime.Reflection));

	const isNextEnabled = morningAlertMinutes < activitiesAlertMinutes
		&& activitiesAlertMinutes < surveyAlertMinutes
		&& surveyAlertMinutes < reflectionAlertMinutes;

	return (
		<OnboardingScreen
			drawShapes={[ 18, 19, 20 ]}
			nextTarget={OnboardingScreens.SetYourAlertsThankYou}
			nextEnabled={isNextEnabled}
			scrollDisabled
			title="Set Your Alerts"
			titleContainerStyle={styles.titleContainer}
			titleChild={
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitleText}>
						tap the time to change it
					</Text>
				</View>
			}
		>
			<View style={styles.container}>
				<View style={styles.pickersContainer}>

					<TimePicker
						alertTime={AlertTime.Morning}
						hasError={false}
						headingText="Morning"
						selectedMinutes={morningAlertMinutes}
					/>

					<TimePicker
						alertTime={AlertTime.Activities}
						hasError={activitiesAlertMinutes <= morningAlertMinutes}
						headingText="Activities"
						selectedMinutes={activitiesAlertMinutes}
					/>

					<TimePicker
						alertTime={AlertTime.Survey}
						hasError={surveyAlertMinutes <= activitiesAlertMinutes}
						headingText="Survey"
						selectedMinutes={surveyAlertMinutes}
					/>

					<TimePicker
						alertTime={AlertTime.Reflection}
						hasError={reflectionAlertMinutes <= surveyAlertMinutes}
						headingText="Reflection"
						selectedMinutes={reflectionAlertMinutes}
					/>

				</View>
			</View>
		</OnboardingScreen>
	);
};
