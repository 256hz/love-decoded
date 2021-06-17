import React from 'react';
import { View, Text } from 'react-native';
import { Course2Step9Screens } from 'route/Steps/Course2Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from 'redux/action';
import { getStepActivity } from 'redux/selector';
import { Courses, Steps, Activities } from 'redux/types/survey';
import { StepScreen, ListTextInput } from '@elements';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.Two, Steps.Nine, Activities.Course2Step9Activity2),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Nine, Activities.Course2Step9Activity2, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step9Screens.Activities3}
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Select 1 behavior, from 1 person, you want to transform.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={[styles.bodyText, styles.boldText]}>
						I am going to change ______ behavior “because I love myself.”
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Who is going to gently nudge you, support you – make a list of their names.
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
