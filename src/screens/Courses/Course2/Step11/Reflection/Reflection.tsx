import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stepGoodJobScreen, stepHomeScreen } from 'route/enums';
import { Course2Step11Screens } from 'route/Steps/Course2Screens';
import { getUserProgress } from '@redux/selector';
import { StepScreen } from '@elements';
import styles from './Reflection.styles';

export default () => {
	const { navigate } = useNavigation();
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);

	const audioFilename = `${currentStep}_${currentDay}_reflections.mp3`;

	// const onPress = () => navigate(Course2Step11Screens.Visualization);

	return (
		<StepScreen
			audioFilename={audioFilename}
			backTarget={stepHomeScreen[currentCourse][currentStep]}
			nextTarget={stepGoodJobScreen[currentCourse][currentStep]}
		>
			<View style={styles.container}>

				<View style={styles.contentContainer}>

					<View style={styles.bodyText}>
						<Text style={styles.body}>
							Why do we put up with other’s unloving behaviors, tolerate them mistreating us? Simple! Because we don’t love ourself enough, so we are dependent on their love, even if it is conditional, flawed and hurtful.
						</Text>
					</View>

				</View>
			</View>
		</StepScreen>
	);
};

