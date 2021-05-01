import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step4Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Four, Activities.Course1Step4Activity1, text),
	);

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="one_second_silence.mp3"
				nextTarget={Course1Step4Screens.Activities2}
				// scrollDisabled
			>
				<View style={styles.container}>
					<View style={styles.bodyContainer}>
						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText}>
								Clear vision is what you ideally want for every aspect of life, whether it is your relationship with yourself, other relationships, work, health, etc.
							</Text>
						</View>

						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText}>
								What is your unlovable behavior or the negative aspects of a situation you’d like to change?  Be very specific. Your vision will be the exact opposite.
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
		</StackKeyboardAvoidingView>
	);
};
