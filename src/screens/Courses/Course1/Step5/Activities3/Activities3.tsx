import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities3.styles';

export default () => {
	const dispatch = useDispatch();

	const situationNow = useSelector(
		getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Activity3),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Activity3, text),
	);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step5Screens.Activities4a}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Write the new version, using Awareness and Vision, so it Transforms what you said originally into something constructive.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Example: “We have a good friendship and I like to it to only get better” - then – “and I know you are not being disrespectful to hurt my feelings on purpose, but when you cancel the last minute it hurts."
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
