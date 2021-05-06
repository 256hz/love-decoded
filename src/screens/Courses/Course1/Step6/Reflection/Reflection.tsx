import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import { stepGoodJobScreen, stepHomeScreen } from 'route/enums';
import { getUserProgress } from '@redux/selector';
import styles from './Reflection.styles';

export default () => {
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);

	const audioFilename = `${currentStep}_${currentDay}_reflections.mp3`;

	return (
		<StepScreen
			audioFilename={audioFilename}
			backTarget={stepHomeScreen[currentCourse][currentStep]}
			nextTarget={stepGoodJobScreen[currentCourse][currentStep]}
		>
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text style={styles.questionText}>
						How does it feel to not blame another when you feel they did something on purpose?
					</Text>

					<Text style={styles.questionText}>
						How does it feel to control your impulse to speak out of anger?
					</Text>

					<Text style={styles.questionText}>
						How does it feel to achieve a positive result in difficult circumstances?
					</Text>
				</View>
			</View>
		</StepScreen>
	);
};

