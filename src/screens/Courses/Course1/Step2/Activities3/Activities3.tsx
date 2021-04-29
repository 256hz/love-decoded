import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Course1Step2Screens } from 'route/Steps/Course1Screens';
import Info from '@assets/svg/info.svg';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities3.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	const onPressInfoBubble = () => {
		navigate(Course1Step2Screens.Resources1);
	};

	const reaction1Response = useSelector(
		getStepActivity(Courses.One, Steps.Two, Activities.Course1Step2Activity3a),
	);

	const reaction2Response = useSelector(
		getStepActivity(Courses.One, Steps.Two, Activities.Course1Step2Activity3b),
	);

	const reaction3Response = useSelector(
		getStepActivity(Courses.One, Steps.Two, Activities.Course1Step2Activity3c),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Two, activity, text),
	);

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="one_second_silence.mp3"
				nextTarget={Course1Step2Screens.Activities4}
				// scrollDisabled
			>
				<View style={styles.container}>

					<View style={styles.bodyContainer}>
						<View style={styles.row}>
							<View style={styles.textContainer}>
								<Text style={styles.bodyText}>
									Now use a couple of words to describe your reaction toward yourself for each situation - Example: “I was angry with myself because...”
								</Text>
							</View>

							<TouchableOpacity onPress={onPressInfoBubble}>
								<Info />
							</TouchableOpacity>
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							multiline={false}
							text={reaction1Response}
							setText={text => setResponse(text, Activities.Course1Step2Activity3a)}
						/>

						<ListTextInput
							containerStyle={styles.textInput}
							multiline={false}
							text={reaction2Response}
							setText={text => setResponse(text, Activities.Course1Step2Activity3b)}
						/>

						<ListTextInput
							containerStyle={styles.textInput}
							multiline={false}
							text={reaction3Response}
							setText={text => setResponse(text, Activities.Course1Step2Activity3c)}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
