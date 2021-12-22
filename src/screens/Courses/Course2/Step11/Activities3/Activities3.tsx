import React from 'react';
import { View, Text } from 'react-native';
import { Course2Step11Screens } from 'route/Steps/Course2Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen, ListTextInput } from '@elements';
import styles from './Activities3.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.Two, Steps.Eleven, Activities.Course2Step11Activity3),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Eleven, Activities.Course2Step11Activity3, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step11Screens.Activities4}
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Who is going to gently nudge you, support you through this  change of behavior – make a list of their names.
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
