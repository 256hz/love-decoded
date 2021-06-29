import React from 'react';
import { View, Text } from 'react-native';
import { Course2Step14Screens } from 'route/Steps/Course2Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from 'redux/action';
import { getStepActivity } from 'redux/selector';
import { Courses, Steps, Activities } from 'redux/types/survey';
import { StepScreen, ListTextInput } from '@elements';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.Two, Steps.Fourteen, Activities.Course2Step14Activity2),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Fourteen, Activities.Course2Step14Activity2, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step14Screens.Activities3}
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Forgiving yourself and others is the healthiest thing you can do. Healthier than exercising, eating healthy, or meditating.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Write what you are going to say to each.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={response}
						setText={setResponse}
					/>

					<ListTextInput
						containerStyle={styles.textInput}
						text={response}
						setText={setResponse}
					/>

					<ListTextInput
						containerStyle={styles.textInput}
						text={response}
						setText={setResponse}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							How do you think you will feel once you forgive them?
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
