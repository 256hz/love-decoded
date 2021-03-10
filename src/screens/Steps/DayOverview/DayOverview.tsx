import { useNavigation } from '@react-navigation/native';
import { StepScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserProgress } from '@redux/selector';
import { Activity } from '@redux/types/user';
import { StepScreens } from 'route/enums';
import ActivityCard from './ActivityCard';
import { ActivityStatus } from './ActivityCard/ActivityCard';
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
					onPress={() => navigate(StepScreens.Intention)}
					status={getStatus(currentActivity, 1)}
				/>

				<ActivityCard
					title="Activities"
					subtitle="Afternoon"
					onPress={() => navigate(StepScreens.Intention)}
					status={getStatus(currentActivity, 2)}
				/>

				<ActivityCard
					title="Survey"
					subtitle="Evening"
					onPress={() => navigate(StepScreens.Intention)}
					status={getStatus(currentActivity, 3)}
				/>

				<ActivityCard
					title="Reflection"
					subtitle="Bedtime"
					onPress={() => navigate(StepScreens.Intention)}
					status={getStatus(currentActivity, 4)}
				/>
			</View>
		</StepScreen>
	);
};
