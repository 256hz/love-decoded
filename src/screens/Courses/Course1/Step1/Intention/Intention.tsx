import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { CourseScreens } from 'route/enums';
import { Slider, StepScreen } from '@elements';
import { getDaySurvey, getUserProgress } from '@redux/selector';
import { setDaySurveyResponse } from '@redux/action';
import {
	Courses,
	DayFromNumber,
	Days,
	HowAreYouFeelingResponse,
	Steps,
	Surveys,
} from '@redux/types/survey';
import styles from './Intention.styles';

const audio = {
	[Days.One]: 'step1_day1_intentions.mp3',
	[Days.Two]: 'step1_day2_intentions.mp3',
	[Days.Three]: 'step1_day3_intentions.mp3',
	[Days.Four]: 'step1_day4_intentions.mp3',
	[Days.Five]: 'step1_day5_intentions.mp3',
	[Days.Six]: 'step1_day6_intentions.mp3',
	[Days.Seven]: 'step1_day7_intentions.mp3',
};

export default () => {
	const dispatch = useDispatch();
	const { currentDay } = useSelector(getUserProgress);

	const response = useSelector(getDaySurvey(Courses.One, Steps.One, DayFromNumber[currentDay], Surveys.HowAreYouFeeling));

	const setResponse = (number: HowAreYouFeelingResponse) => {
		dispatch(setDaySurveyResponse(Courses.One, Steps.One, DayFromNumber[currentDay], Surveys.HowAreYouFeeling, number));
	};

	return (
		<StepScreen
			audioFilename={audio[DayFromNumber[currentDay]]}
			nextTarget={CourseScreens.GoodJob}
		>
			<View>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, { textAlign: 'center' } ]}>
							On a scale from 1-10, How are you feeling today?
						</Text>
					</View>

					<View style={styles.sliderContainer}>
						<Slider onValueChanged={setResponse} value={response} />
					</View>

					<Text style={styles.textItemContainer}>
						1.  Which qualities do you value most in other people?
					</Text>
					<Text style={styles.textItemContainer}>
						2.  Which are the qualities that people like about you?
					</Text>
					<Text style={styles.textItemContainer}>
						3.  Which qualities do you like about yourself?
					</Text>
					<Text style={styles.textItemContainer}>
						4.  Which is the nicest compliment you’ve ever received?
					</Text>
				</View>
			</View>
		</StepScreen>
	);
};
