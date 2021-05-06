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
					<Text style={styles.body}>
						Communication is the life blood of any relationship.
					</Text>

					<Text style={styles.body}>
						Whether it’s self-talk or communicating with others.
					</Text>

					<Text style={styles.boldText}>
						Have you started practicing how to frame a communication properly?
					</Text>
				</View>
			</View>
		</StepScreen>
	);
};

