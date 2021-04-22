import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import { CourseCommonScreens } from 'route/enums';
import { Days } from '@redux/types/survey';
import { getUserProgress } from '@redux/selector';
import styles from './Reflection.styles';

export default () => {
	const { currentDay } = useSelector(getUserProgress);

	const audioFilename = `step3_${currentDay}_reflections.mp3`;

	return (
		<StepScreen
			audioFilename={audioFilename}
			backTarget={CourseCommonScreens.Home}
			nextTarget={CourseCommonScreens.GoodJob}
		>
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text style={styles.questionText}>
						Today you wrote self-reflecting, self-loving sentences intended to transform your unloving behaviors, such as...
					</Text>

					<View style={styles.underline} />

					<Text style={styles.questionText}>
						Always start your inner dialogue with your positive behaviors, then acknowledge the unloving behavior you’re transforming, and end with “I like myself.”, a self-loving thought. How differently does that feel?
					</Text>

				</View>
			</View>
		</StepScreen>
	);
};

