import React from 'react';
import { View, Text } from 'react-native';
import { Course2Step11Screens } from 'route/Steps/Course2Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from 'redux/action';
import { getStepActivity } from 'redux/selector';
import { Courses, Steps, Activities } from 'redux/types/survey';
import { StepScreen, ListTextInput } from '@elements';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.Two, Steps.Eleven, Activities.Course2Step11Activity2),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Eleven, Activities.Course2Step11Activity2, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step11Screens.Activities3}
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Select 1 behavior, from 1 person, you want to transform.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, styles.boldText ]}>
						I am going to change xxxx’s, yyyy behavior towards me, “because I love myself”.  
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, styles.boldText ]}>
						Example
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						I am going to transform Tom’s impatient behavior with me “because I love myself.” Let Tom know his impatience is not acceptable and that you will gently nudge him when he does it.
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
