import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { StepScreens } from 'route/enums';
import { Slider, StepScreen } from '@elements';
import { getStepSurvey, getUserProgress } from '@redux/selector';
import { setStepSurveyResponse } from '@redux/action';
import {
	Courses, DayFromNumber, HowAreYouFeelingResponse, Steps, Surveys,
} from '@redux/types/survey';
import styles from './Intention.styles';

export default () => {
	const dispatch = useDispatch();
	const { currentDay } = useSelector(getUserProgress);

	const response = useSelector(getStepSurvey(Courses.One, Steps.One, DayFromNumber[currentDay], Surveys.HowAreYouFeeling));

	const setResponse = (number: HowAreYouFeelingResponse) => {
		dispatch(setStepSurveyResponse(Courses.One, Steps.One, DayFromNumber[currentDay], Surveys.HowAreYouFeeling, number));
	};

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={StepScreens.GoodJob}
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
