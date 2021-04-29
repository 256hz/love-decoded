import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Info from '@assets/svg/info.svg';
import { Course1Step4Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities1.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	const onPressInfoBubble = () => {
		navigate(Course1Step4Screens.Resources1);
	};

	const positiveResponse = useSelector(
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
								Write 2-3 unlovable behaviors you’d like to transform.
							</Text>

							<TouchableOpacity onPress={onPressInfoBubble}>
								<Info />
							</TouchableOpacity>
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
