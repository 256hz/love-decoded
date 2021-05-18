import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Course1Step7Screens } from 'route/Steps/Course1Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { StepScreen } from '@elements';
import ListTextInput from '@elements/ListTextInput/ListTextInput';
import styles from './Activities3.styles';

export default () => {
	const dispatch = useDispatch();

	const response = useSelector(
		getStepActivity(Courses.One, Steps.Seven, Activities.Course1Step7Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Seven, Activities.Course1Step7Activity1, text),
	);

	const onPressShare = () => {
		console.log('print/share mirroring sheet');
	};

	return (
		<StepScreen
			audioFilename="step7_activities.mp3"
			nextTarget={Course1Step7Screens.Activities4}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Ask at least 2-3 people from your “unconditional circle” (family and friends) to practice with you. Print out and give them the Mirroring Sheet. Write the names of 2-3 people you are going to ask.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInput}
						text={response}
						setText={setResponse}
					/>

					<TouchableOpacity onPress={onPressShare}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								Print/share mirroring sheet
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</StepScreen>
	);
};
