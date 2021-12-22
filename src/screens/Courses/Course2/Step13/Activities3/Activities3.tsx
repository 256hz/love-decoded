import React from 'react';
import { View, Text } from 'react-native';
import { Course2Step13Screens } from 'route/Steps/Course2Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen, ListTextInput } from '@elements';
import styles from './Activities3.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.Two, Steps.Thirteen, Activities.Course2Step13Activity3),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Thirteen, Activities.Course2Step13Activity3, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step13Screens.Activities4}
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							What steps can help you to forgive yourself?
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						placeholder="Examples; We all make mistakes. What I learned from this one is to be better prepared. I forgive myself because I love myself. Loving myself will help me better prepare."
						text={response}
						setText={setResponse}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
