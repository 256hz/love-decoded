import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step2Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities4.styles';

export default () => {
	const dispatch = useDispatch();

	const positiveResponse = useSelector(
		getStepActivity(Courses.One, Steps.Two, Activities.Course1Step2Activity4),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Two, activity, text),
	);

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="one_second_silence.mp3"
				nextTarget={Course1Step2Screens.Activities5}
				// scrollDisabled
			>
				<View style={styles.container}>
					<View style={styles.bodyContainer}>
						<View style={styles.textContainer}>
							<Text style={styles.bodyText}>
								Use the examples from the previous screen or take a situation and write a couple of short sentences that would have been more positive when talking to yourself.
							</Text>
						</View>

						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText} />
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							text={positiveResponse}
							setText={text => setResponse(text, Activities.Course1Step2Activity4)}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
