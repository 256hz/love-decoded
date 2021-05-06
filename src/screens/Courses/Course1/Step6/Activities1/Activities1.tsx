import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step6Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.One, Steps.Six, Activities.Course1Step6Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Six, Activities.Course1Step6Activity1, text),
	);

	return (
		<StepScreen
			nextTarget={Course1Step6Screens.Activities2}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Pillars of framing a communication –{'\n'}
							{'  '}1. Nobody does hurtful things on purpose – no blame{'\n'}
							{'  '}2. Everybody is doing the best they can using what they learned in childhood
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Write down 2-3 names of people you are close to with whom you get upset regularly.
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
