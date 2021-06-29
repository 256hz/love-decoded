import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course2Step11Screens } from 'route/Steps/Course2Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Activities, Courses, Steps } from '@redux/types/survey';
import { ListTextInput, StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const savedResponse = useSelector(
		getStepActivity(Courses.Two, Steps.Eleven, Activities.Course2Step11Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Eleven, Activities.Course2Step11Activity1, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step11Screens.Activities2}
			// audioFilename="one_second_silence.mp3"
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							From  your list of Unlovable Qualities on Step 3 , which Unloving behaviors do you  most commonly use to mistreat others? You can use other behaviors. 
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
