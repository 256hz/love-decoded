import React from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import ListTextInput, { SingleBullet } from '@elements/ListTextInput/ListTextInput';
import { StepScreens } from 'route/enums';
import { useDispatch, useSelector } from 'react-redux';
import { setStepSurveyResponse } from 'redux/action';
import { getUserProgress, getStepSurvey } from 'redux/selector';
import {
	Courses, Steps, DayFromNumber, Activities,
} from 'redux/types/survey';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();
	const { currentDay } = useSelector(getUserProgress);
	const missingResponse = useSelector(
		getStepSurvey(Courses.One, Steps.One, DayFromNumber[currentDay], Activities.LovableQualitiesOthersMissing),
	);
	const doNotAgreeResponse = useSelector(
		getStepSurvey(Courses.One, Steps.One, DayFromNumber[currentDay], Activities.LovableQualitiesOthersDoNotAgree),
	);

	const setResponse = (text: string, activity: Activities) => {
		dispatch(setStepSurveyResponse(Courses.One, Steps.One, DayFromNumber[currentDay], activity, text));
	};

	return (
		<StepScreen
			nextTarget={StepScreens.Step1Activities3}
			// scrollDisabled
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Which loveable qualities do others think are missing from your list?
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={missingResponse || SingleBullet}
						setText={text => setResponse(text, Activities.LovableQualitiesOthersMissing)}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Which loveable qualities on your list do others not agree with?
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={doNotAgreeResponse || SingleBullet}
						setText={text => setResponse(text, Activities.LovableQualitiesOthersDoNotAgree)}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
