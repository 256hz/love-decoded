import React from 'react';
import { Text, View } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import { useDispatch, useSelector } from 'react-redux';
import { ListTextInput } from '@elements';
import { getStepActivity } from 'redux/selector';
import { Activities, Courses, Steps } from 'redux/types/survey';
import { setStepActivityResponse } from 'redux/action';
import styles from './Resources2.styles';

export default ({ navigation }) => {
	const dispatch = useDispatch();

	const vision = useSelector(getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Resources2a));

	const setVision = (text: string) => {
		dispatch(setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Resources2a, text));
	};

	const rewrite = useSelector(getStepActivity(Courses.One, Steps.Five, Activities.Course1Step5Resources2b));

	const setRewrite = (text: string) => {
		dispatch(setStepActivityResponse(Courses.One, Steps.Five, Activities.Course1Step5Resources2b, text));
	};

	const onClose = () => navigation.pop(2);

	return (
		<ResourcesScreen
			hideNextButton
			onClose={onClose}
			nextTarget={Course1Step5Screens.Resources2}
			navigation={navigation}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>
						Now, write your vision for each goal - this will be your first draft.
					</Text>
				</View>

				<ListTextInput
					text={vision}
					setText={setVision}
					style={styles.textInput}
				/>

				<View>
					<Text style={styles.text}>
						Now, select appropriate individuals to give you feedback on the vision you’ve developed. You should seek those that treat you lovingly and ask for their experience and insights. Leave the discussion of your vision wide open and unlimited.
					</Text>
				</View>

				<View>
					<Text style={styles.text}>
						Consider {'others\''} feedback, then re-write your vision to make it better.
					</Text>
				</View>

				<ListTextInput
					text={rewrite}
					setText={setRewrite}
					style={styles.textInput}
				/>
			</View>
		</ResourcesScreen>
	);
};
