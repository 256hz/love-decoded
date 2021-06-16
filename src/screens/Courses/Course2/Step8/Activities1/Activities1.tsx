import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { Course2Step8Screens } from 'route/Steps/Course2Screens';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Activities, Courses, Steps } from '@redux/types/survey';
import { ListTextInput, StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const savedResponse = useSelector(
		getStepActivity(Courses.Two, Steps.Eight, Activities.Course2Step8Activity1),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.Two, Steps.Eight, Activities.Course2Step8Activity1, text),
	);

	return (
		<StepScreen
			nextTarget={Course2Step8Screens.Activities2}
			// audioFilename="one_second_silence.mp3"
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							List all the morning routines you do. This particular exercise is to be done for no less than 66 days - that is how long it takes to form a habit without thinking about it.
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={[ styles.bodyText, styles.boldText ]}>
							Instructions for creating self-love talk list based on morning rituals:
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={styles.bodyText}>
							- Getting up – ‘I get out of bed…because I love myself'
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={styles.bodyText}>
							- Washing up – ‘I wash up….because I.’
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={styles.bodyText}>
							- Getting dressed – “I get… “
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={styles.bodyText}>
							- Eating a good breakfast – “I… “
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={styles.bodyText}>
							- Going to work/school/do my daily routines – “I… “
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
