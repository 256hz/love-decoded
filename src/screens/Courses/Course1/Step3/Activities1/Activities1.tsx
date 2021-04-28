import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Course1Step3Screens } from 'route/Steps/Course1Screens';
import Info from '@assets/svg/info.svg';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities1.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const positiveResponse = useSelector(
		getStepActivity(Courses.One, Steps.Three, Activities.Course1Step3Activity1),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Three, activity, text),
	);

	const onPressInfoBubble = () => {
		navigate(Course1Step3Screens.Resources);
	};

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="one_second_silence.mp3"
				nextTarget={Course1Step3Screens.Activities2}
				// scrollDisabled
			>
				<View style={styles.container}>
					<View style={styles.bodyContainer}>
						<View style={[ styles.textItemContainer, styles.row ]}>
							<Text style={styles.bodyText}>
								Write 2-3 unlovable behaviors you’d like to transform.
							</Text>

							<TouchableOpacity onPress={onPressInfoBubble}>
								<View style={styles.infoBubble}>
									<Info />
								</View>
							</TouchableOpacity>
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							text={positiveResponse}
							setText={text => setResponse(text, Activities.Course1Step3Activity1)}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
