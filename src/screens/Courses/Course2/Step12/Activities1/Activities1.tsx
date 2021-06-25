import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course2Step12Screens } from 'route/Steps/Course2Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Activities, Courses, Steps } from '@redux/types/survey';
import { ListTextInput, StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const savedResponse = useSelector(
		getStepActivity(Courses.Two, Steps.Twelve, Activities.Course2Step12Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Twelve, Activities.Course2Step12Activity1, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step12Screens.Activities2}
			// audioFilename="one_second_silence.mp3"
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Make a list of 3 resentments <Text style={styles.boldText}>you have against yourself</Text> that you are still carrying around. 
						</Text>
					</View>

					
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
						Which one will you let go of first? Let people know you need their support. 
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInputContainer}
						text={savedResponse}
						setText={setResponse}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
