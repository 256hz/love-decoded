import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step1Screens } from 'route/Steps/Course1Screens';


import { useDispatch, useSelector } from 'react-redux';
import { setStepActivityResponse } from 'redux/action';
import { getStepActivity } from 'redux/selector';
import { Courses, Steps, Activities } from 'redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen, ListTextInput } from '@elements';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();
	const missingResponse = useSelector(
		getStepActivity(Courses.One, Steps.One, Activities.Course1Step1Activity2a),
	);

	const doNotAgreeResponse = useSelector(
		getStepActivity(Courses.One, Steps.One, Activities.Course1Step1Activity2b),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.One, activity, text),
	);

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				nextTarget={Course1Step1Screens.Activities3}
				// scrollDisabled
			>
				<View style={styles.container}>

					<View style={styles.bodyContainer}>
						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText}>
								List 3 situations you messed up recently and got upset with yourself.
							</Text>
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							text={missingResponse}
							setText={text => setResponse(text, Activities.Course1Step1Activity2a)}
						/>

						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText}>
								Which loveable qualities on your list do others not agree with?
							</Text>
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							text={doNotAgreeResponse}
							setText={text => setResponse(text, Activities.Course1Step1Activity2b)}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
