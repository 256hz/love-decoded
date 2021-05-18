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
						Why is it so hard to repeat what someone is saying?
					</Text>

					<Text style={styles.questionText}>
						Why do we have to ask, “Is there anything more?”
					</Text>

					<Text style={styles.questionText}>
						Why is it when someone mirrors us that it feels so good?
					</Text>

					<Text style={styles.questionText}>
						Why does poor communication lead to resentments?
					</Text>
				</View>
			</View>
		</StepScreen>
	);
};

