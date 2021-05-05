import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step4Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities2.styles';

export default () => {
	const dispatch = useDispatch();

	const selfNow = useSelector(
		getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Activity2a),
	);

	const visionForSelf = useSelector(
		getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Activity2b),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Four, activity, text),
	);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step4Screens.Activities3}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Write down exactly what your ideal Self or ideal situation would be – again, be very specific. This is the Vision you will be using – visions are our GPS, our road maps.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={selfNow}
						setText={text => setResponse(text, Activities.Course1Step4Activity2a)}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Start by applying vision to yourself. Write one characteristic you’d like to change to make you feel better about yourself.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={visionForSelf}
						setText={text => setResponse(text, Activities.Course1Step4Activity2b)}
					/>

				</View>
			</View>
		</StepScreen>
	);
};
