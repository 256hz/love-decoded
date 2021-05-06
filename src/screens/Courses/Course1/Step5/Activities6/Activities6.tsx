import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities6.styles';

export default () => {
	const dispatch = useDispatch();

	const situationNow = useSelector(
		getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Activity6),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Activity6, text),
	);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step5Screens.Activities7}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Write down 1 or 2 upsetting situations you had with others and what you said.  How would you change those 2 communications using a positive context?
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							What is your vision for the relationship?
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Will you accomplish it with your communication?
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
