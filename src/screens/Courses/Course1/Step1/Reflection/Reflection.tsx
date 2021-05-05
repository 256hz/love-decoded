import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stepGoodJobScreen, stepHomeScreen } from 'route/enums';
import { Course1Step1Screens } from 'route/Steps/Course1Screens';
import { Days } from '@redux/types/survey';
import { getUserProgress } from '@redux/selector';
import { StepScreen } from '@elements';
import styles from './Reflection.styles';

export default () => {
	const { navigate } = useNavigation();
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);

	const getAudioFilename = (day: Days) => `step1_${day}_reflections.mp3`;

	const onPress = () => navigate(Course1Step1Screens.Visualization);

	return (
		<StepScreen
			audioFilename={getAudioFilename(currentDay)}
			backTarget={stepHomeScreen[currentCourse][currentStep]}
			nextTarget={stepGoodJobScreen[currentCourse][currentStep]}
		>
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text style={styles.questionText}>
						What did it feel like to write and share your loveable and caring qualities with others?
					</Text>
				</View>

				<View style={styles.contentContainer}>
					<Text style={styles.headline}>
						Optional
					</Text>

					<Text style={styles.body}>
						{'If you would like to do guided\nmeditation/visualization'}
					</Text>

					<TouchableOpacity onPress={onPress}>
						<View style={styles.button}>
							<Text style={styles.questionText}>
								click here
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</StepScreen>
	);
};

