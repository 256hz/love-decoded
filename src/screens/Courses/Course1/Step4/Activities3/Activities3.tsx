import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step3Screens } from 'route/Steps/Course1Screens';
import Info from '@assets/svg/info.svg';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities3.styles';

export default () => {
	const dispatch = useDispatch();
	const positiveResponse = useSelector(
		getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Activity3),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Four, Activities.Course1Step4Activity3, text),
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
							setText={setResponse}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
