import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { Course1Step6Screens } from 'route/Steps/Course1Screens';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import { setStepActivityResponse } from '@redux/action';
import { getStepActivity } from '@redux/selector';
import { Courses, Steps, Activities } from '@redux/types/survey';
import { ListTextInput } from '@elements';
import styles from './Resources2.styles';

export default ({ navigation }) => {
	const dispatch = useDispatch();
	const onClose = () => navigation.pop(2);

	const response = useSelector(
		getStepActivity(Courses.One, Steps.Six, Activities.Course1Step6Resources2),
	);

	const setResponse = (text: string) => dispatch(
		setStepActivityResponse(Courses.One, Steps.Six, Activities.Course1Step6Resources2, text),
	);

	return (
		<ResourcesScreen
			hideBackButton
			onClose={onClose}
			nextTarget={Course1Step6Screens.Resources2}
			navigation={navigation}
		>
			<View style={styles.container}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.boldText}>
						People will only respond positively to a loving intention.  Communicate without Blame.
					</Text>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.text}>
						Use the challenge as an opportunity to practice communicating effectively. Tell the other person, “I know you like me and you would never upset me on purpose, but what you said/did hurt.”
					</Text>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.text}>
						Speak in 2-3 short sentences to keep from overwhelming the other person. If interrupted, ask them nicely, “Please don’t interrupt me.” At the end, ask them, “Could you please tell me what you believe I said?”
					</Text>
				</View>

				<ListTextInput
					containerStyle={styles.textInput}
					setText={setResponse}
					text={response}
				/>
			</View>
		</ResourcesScreen>
	);
};
