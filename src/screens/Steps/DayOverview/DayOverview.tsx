import { StepScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProperty } from 'redux/action';
import { getUserProgress } from 'redux/selector';
import { UserProperty } from 'redux/types/user';
import ActivityCard from './ActivityCard';
import styles from './DayOverview.styles';

export enum Activity {
	Morning = 1,
	Afternoon = 2,
	Evening = 3,
	Bedtime = 4,
}

export enum ActivityStatus {
	Complete = 'complete',
	Active = 'active',
	Future = 'future',
}

const getStatus = (currentActivity: Activity, thisActivity: Activity) => {
	switch (true) {
		case thisActivity < currentActivity:
			return ActivityStatus.Complete;
		case thisActivity === currentActivity:
			return ActivityStatus.Active;
		case thisActivity > currentActivity:
		default:
			return ActivityStatus.Future;
	}
};

export default ({ title = 'Discovering Your Lovable Qualities' }) => {
	const dispatch = useDispatch();
	const { currentStep, currentDay, currentActivity } = useSelector(getUserProgress);

	return (
		<StepScreen>
			<View style={styles.container}>
				<View style={styles.topTextContainer}>
					<Text style={styles.titleText}>
						{title}
					</Text>
					<Text style={styles.progressText}>
						Step {currentStep}, Day {currentDay}
					</Text>
				</View>
				<ActivityCard
					title="Intention"
					subtitle="Morning"
					status={getStatus(currentActivity as Activity, 1)}
				/>
				<ActivityCard
					title="Activities"
					subtitle="Afternoon"
					status={getStatus(currentActivity as Activity, 2)}
				/>
				<ActivityCard
					title="Survey"
					subtitle="Evening"
					status={getStatus(currentActivity as Activity, 3)}
				/>
				<ActivityCard
					title="Reflection"
					subtitle="Bedtime"
					status={getStatus(currentActivity as Activity, 4)}
				/>
			</View>
		</StepScreen>
	);
};
