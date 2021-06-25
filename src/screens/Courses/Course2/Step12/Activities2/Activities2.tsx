import React from 'react';
import { View, Text } from 'react-native';
import { Course2Step12Screens } from 'route/Steps/Course2Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from 'redux/action';
import { getStepActivity } from 'redux/selector';
import { Courses, Steps, Activities } from 'redux/types/survey';
import { StepScreen, ListTextInput } from '@elements';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.Two, Steps.Twelve, Activities.Course2Step12Activity2),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Twelve, Activities.Course2Step12Activity2, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step12Screens.Activities3}
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Make a list of 3 resentments <Text style={styles.boldText}>you have with others</Text> that you are still carrying around.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Which one will you let go of first? Let people know you need their support.
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
