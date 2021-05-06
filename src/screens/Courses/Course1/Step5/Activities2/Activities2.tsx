import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const selfNow = useSelector(
		getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Activity2),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Activity2, text),
	);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step5Screens.Activities3}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Recall 2-3 conversations about problems, disagreements - with others. Can you transform what you said so it would be more constructive?
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Example: “You cancel our meetings at the last minute”, or “You ask me for help, but are busy when I need help in return”. Write what you said in the original Situations.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={selfNow}
						setText={setResponse}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
