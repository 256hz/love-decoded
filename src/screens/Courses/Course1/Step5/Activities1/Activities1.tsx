import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Activity1, text),
	);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step5Screens.Activities2}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Get clear what is troubling you about yourself or a certain situation - called Awareness.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							What do you want yourself or the situation to change to - called Vision.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={response}
						setText={setResponse}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
