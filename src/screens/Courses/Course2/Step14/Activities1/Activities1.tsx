import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course2Step14Screens } from 'route/Steps/Course2Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Activities, Courses, Steps } from '@redux/types/survey';
import { ListTextInput, StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const savedResponse = useSelector(
		getStepActivity(Courses.Two, Steps.Fourteen, Activities.Course2Step14Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Fourteen, Activities.Course2Step14Activity1, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step14Screens.Activities2}
			// audioFilename="one_second_silence.mp3"
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Make a list of 3 people you want to forgive.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInputContainer}
						text={savedResponse}
						setText={setResponse}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Make a list of what you want to forgive them for – be specific.
						</Text>
					</View>

					<ListTextInput
						containerStyle={styles.textInputContainer}
						text={savedResponse}
						setText={setResponse}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Do you think they harmed you on purpose? Remember people are responsible for their actions and behaviors, which is different from them hurting us on purpose.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
