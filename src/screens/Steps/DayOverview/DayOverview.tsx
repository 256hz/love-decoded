import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Course1Step1Screens } from 'route/enums';
import { getUserProgress } from '@redux/selector';
import { Activity } from '@redux/types/user';
import { StepScreen } from '@elements';
import { ActivityStatus } from './ActivityCard/ActivityCard';
import ActivityCard from './ActivityCard';
import styles from './DayOverview.styles';

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

export default () => {
	const { navigate } = useNavigation();
	const { currentStep, currentDay, currentActivity } = useSelector(getUserProgress);
	const title = 'Discovering Your Lovable Qualities';

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
					onPress={() => navigate(Course1Step1Screens.Intention)}
					status={getStatus(currentActivity, Activity.Morning)}
				/>

				<ActivityCard
					title="Activities"
					subtitle="Afternoon"
					onPress={() => navigate(Course1Step1Screens.Activities1)}
					status={getStatus(currentActivity, Activity.Afternoon)}
				/>

				<ActivityCard
					title="Survey"
					subtitle="Evening"
					onPress={() => navigate(Course1Step1Screens.Survey)}
					status={getStatus(currentActivity, Activity.Evening)}
				/>

				<ActivityCard
					title="Reflection"
					subtitle="Bedtime"
					onPress={() => navigate(Course1Step1Screens.Reflection)}
					status={getStatus(currentActivity, Activity.Bedtime)}
				/>
			</View>
		</StepScreen>
	);
};
