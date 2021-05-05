import React from 'react';
import { Text, View } from 'react-native';
import { Course1Step4Screens } from 'route/Steps/Course1Screens';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import { useDispatch, useSelector } from 'react-redux';
import { ListTextInput } from '@elements';
import { getStepActivity } from 'redux/selector';
import { Activities, Courses, Steps } from 'redux/types/survey';
import { setStepActivityResponse } from 'redux/action';
import styles from './Resources3.styles';

export default ({ navigation }) => {
	const dispatch = useDispatch();

	const visionStatement = useSelector(getStepActivity(Courses.One, Steps.Four, Activities.Course1Step4Resources3));

	const setVisionStatement = (text: string) => {
		dispatch(setStepActivityResponse(Courses.One, Steps.Four, Activities.Course1Step4Resources3, text));
	};

	return (
		<ResourcesScreen
			hideBackButton
			nextTarget={Course1Step4Screens.Resources3}
			navigation={navigation}
		>
			<View style={styles.container}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.text}>
						Write down your vision statement using the statements from previous page.
					</Text>
				</View>

				<ListTextInput
					text={visionStatement}
					setText={setVisionStatement}
					style={styles.textInput}
				/>
			</View>
		</ResourcesScreen>
	);
};
