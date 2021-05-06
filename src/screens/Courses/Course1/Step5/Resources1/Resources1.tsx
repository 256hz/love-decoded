import React from 'react';
import { Text, View } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import { useDispatch, useSelector } from 'react-redux';
import { ListTextInput } from '@elements';
import { getStepActivity } from 'redux/selector';
import { Activities, Courses, Steps } from 'redux/types/survey';
import { setStepActivityResponse } from 'redux/action';
import styles from './Resources1.styles';

export default ({ navigation }) => {
	const dispatch = useDispatch();

	const awareness = useSelector(getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Resources1a));

	const setAwareness = (text: string) => {
		dispatch(setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Resources1a, text));
	};

	const goals = useSelector(getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Resources1b));

	const setGoals = (text: string) => {
		dispatch(setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Resources1b, text));
	};

	const timeframe = useSelector(getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Resources1c));

	const setTimeframe = (text: string) => {
		dispatch(setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Resources1c, text));
	};

	return (
		<ResourcesScreen
			hideBackButton
			nextTarget={Course1Step5Screens.Resources2}
			navigation={navigation}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>
						Establish visions (goals) based on initial awareness.
					</Text>
				</View>

				<ListTextInput
					text={awareness}
					setText={setAwareness}
					style={styles.textInput}
				/>

				<View>
					<Text style={styles.text}>
						Now write down what you want to accomplish based on your awareness.
					</Text>
				</View>

				<ListTextInput
					text={goals}
					setText={setGoals}
					style={styles.textInput}
				/>

				<View>
					<Text style={styles.text}>
						What time frame do you believe the goal is possible to reach within?
					</Text>
				</View>

				<ListTextInput
					text={timeframe}
					setText={setTimeframe}
					style={styles.textInput}
				/>
			</View>
		</ResourcesScreen>
	);
};
