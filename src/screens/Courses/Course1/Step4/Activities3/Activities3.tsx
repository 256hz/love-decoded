import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course1Step3Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities3.styles';

export default () => {
	const dispatch = useDispatch();

	const situationNow = useSelector(
		getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Activity3a),
	);

	const visionForSituation = useSelector(
		getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Activity3b),
	);

	const setResponse = (text: string, activity: Activities) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Four, activity, text),
	);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step3Screens.Activities3}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Write down exactly what your ideal Self or ideal situation would be – again, be very specific. This is the Vision you will be using – visions are our GPS, our road maps
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={situationNow}
						setText={text => setResponse(text, Activities.Course1Step4Activity3a)}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							What is your unlovable behavior or the negative aspects of a situation you’d like to change?  Be very specific. Your vision will be the exact opposite.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={visionForSituation}
						setText={text => setResponse(text, Activities.Course1Step4Activity3b)}
					/>

				</View>
			</View>
		</StepScreen>
	);
};
