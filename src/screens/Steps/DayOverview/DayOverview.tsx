import { StepScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserProgress } from 'redux/selector';
import ActivityCard from './ActivityCard';
import styles from './DayOverview.styles';

export default ({ title }) => {
	const { currentStep, currentDay } = useSelector(getUserProgress);

	return (
		<StepScreen>
			<View style={styles.container}>
				<Text style={styles.titleText}>
					{title}
				</Text>
				<Text style={styles.progressText}>
					Step {currentStep}, Day {currentDay}
				</Text>
				<ActivityCard
					title="Intention"
					subtitle="Morning"
					active={true}
				/>
				<ActivityCard
					title="Activities"
					subtitle="Afternoon"
					active={true}
				/>
			</View>
		</StepScreen>
	);
};
