import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step2Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const situation1Response = useSelector(
		getStepActivity(Courses.One, Steps.Two, Activities.Course1Step2Activity2a),
	);

	const situation2Response = useSelector(
		getStepActivity(Courses.One, Steps.Two, Activities.Course1Step2Activity2b),
	);

	const situation3Response = useSelector(
		getStepActivity(Courses.One, Steps.Two, Activities.Course1Step2Activity2c),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Two, activity, text),
	);

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				audioFilename="one_second_silence.mp3"
				nextTarget={Course1Step2Screens.Activities3}
				// scrollDisabled
			>
				<View style={styles.container}>

					<View style={styles.bodyContainer}>
						<View style={styles.textContainer}>
							<Text style={styles.bodyText}>
								List 3 situations you messed up recently and got upset with yourself.
							</Text>
						</View>

						<ListTextInput
							containerStyle={styles.textInput}
							multiline={false}
							text={situation1Response}
							setText={text => setResponse(text, Activities.Course1Step2Activity2a)}
						/>

						<ListTextInput
							containerStyle={styles.textInput}
							multiline={false}
							text={situation2Response}
							setText={text => setResponse(text, Activities.Course1Step2Activity2b)}
						/>

						<ListTextInput
							containerStyle={styles.textInput}
							multiline={false}
							text={situation3Response}
							setText={text => setResponse(text, Activities.Course1Step2Activity2c)}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
