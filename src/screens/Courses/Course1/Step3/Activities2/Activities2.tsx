import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step3Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const positiveResponse = useSelector(
		getStepActivity(Courses.One, Steps.Three, Activities.Course1Step3Activity2),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Three, activity, text),
	);

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="one_second_silence.mp3"
				nextTarget={Course1Step3Screens.Activities3}
				// scrollDisabled
			>
				<View style={styles.container}>
					<View style={styles.bodyContainer}>
						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText}>
								Select one unlovable behavior you’d like to transform and combine it with 2-3 of your lovable behaviors, ending the sentences with “…I like myself.”
							</Text>
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							text={positiveResponse}
							setText={text => setResponse(text, Activities.Course1Step3Activity2)}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
