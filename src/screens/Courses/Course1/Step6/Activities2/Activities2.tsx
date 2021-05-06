import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step6Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const inThePast = useSelector(
		getStepActivity(Courses.One, Steps.Six, Activities.Course1Step6Activity2a),
	);

	const today = useSelector(
		getStepActivity(Courses.One, Steps.Six, Activities.Course1Step6Activity2b),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Six, activity, text),
	);

	return (
		<StepScreen
			nextTarget={Course1Step6Screens.Activities3}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Write an example of how you would have said something in the past when you were upset.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={inThePast}
						setText={text => setResponse(text, Activities.Course1Step6Activity2a)}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Now write it the way you would say it today.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={today}
						setText={text => setResponse(text, Activities.Course1Step6Activity2b)}
					/>

				</View>
			</View>
		</StepScreen>
	);
};
