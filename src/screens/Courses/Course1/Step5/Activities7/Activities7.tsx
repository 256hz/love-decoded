import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities7.styles';

export default () => {
	const dispatch = useDispatch();

	const situationNow = useSelector(
		getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Activity7),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Activity7, text),
	);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step5Screens.Activities8}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Construct the 2 communications from the prior screen. Before you act, before you communicate, you have to stop to feel and think!
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Check Resources for examples and guidance.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={situationNow}
						setText={setResponse}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
