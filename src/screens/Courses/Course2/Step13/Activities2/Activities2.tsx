import React from 'react';
import { View, Text } from 'react-native';
import { Course2Step13Screens } from 'route/Steps/Course2Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from 'redux/action';
import { getStepActivity } from 'redux/selector';
import { Courses, Steps, Activities } from 'redux/types/survey';
import { StepScreen, ListTextInput } from '@elements';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.Two, Steps.Thirteen, Activities.Course2Step13Activity2),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Thirteen, Activities.Course2Step13Activity2, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step13Screens.Activities3}
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Write down 3 steps that will help you avoid making mistakes.
						</Text>
					</View>


					<ListTextInput
						containerStyle={styles.textInput}
						text={response}
						setText={setResponse}
					/>
					
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						If you try your best and do what you need to do and still fail or make a mistake, at least you’ll never blame yourself.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
