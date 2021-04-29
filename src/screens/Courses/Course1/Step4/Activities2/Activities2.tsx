import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Course1Step4Screens } from 'route/Steps/Course1Screens';
import Info from '@assets/svg/info.svg';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities2.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	const onPressInfoBubble = () => {
		navigate(Course1Step4Screens.Resources1);
	};

	const positiveResponse = useSelector(
		getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Activity2),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Four, activity, text),
	);

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="one_second_silence.mp3"
				nextTarget={Course1Step4Screens.Activities3}
				// scrollDisabled
			>
				<View style={styles.container}>
					<View style={styles.bodyContainer}>
						<View style={styles.textItemContainer}>
							<Text style={styles.bodyText}>
								Select one unlovable behavior you’d like to transform and combine it with 2-3 of your lovable behaviors, ending the sentences with “…I like myself.”
							</Text>

							<TouchableOpacity onPress={onPressInfoBubble}>
								<Info />
							</TouchableOpacity>
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							text={positiveResponse}
							setText={text => setResponse(text, Activities.Course1Step4Activity2)}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
