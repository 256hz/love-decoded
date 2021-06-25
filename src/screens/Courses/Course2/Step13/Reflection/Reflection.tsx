import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stepGoodJobScreen, stepHomeScreen } from 'route/enums';
import { Course2Step13Screens } from 'route/Steps/Course2Screens';
import { getUserProgress } from '@redux/selector';
import { StepScreen } from '@elements';
import styles from './Reflection.styles';

export default () => {
	const { navigate } = useNavigation();
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);

	const audioFilename = `${currentStep}_${currentDay}_reflections.mp3`;

	//const onPress = () => navigate(Course2Step13Screens.Visualization);

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
						20/20 hindsight is foolishness. We all make mistakes that cause failures which often lead to pain. 
						</Text>
					</View>

				</View>
			</View>
		</StepScreen>
	);
};

