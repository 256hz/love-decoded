import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserProgress, getUserProgressNumbers } from '@redux/selector';
import { Activity } from '@redux/types/user';
import { DailyActivity, titles } from '@util/titles';
import { getNavigationStack } from '@util/navigation';
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
	const {
		currentCourse,
		currentStep,
		currentActivity,
	} = useSelector(getUserProgress);

	const {
		currentCourseNumber,
		currentStepNumber,
		currentDayNumber,
	} = useSelector(getUserProgressNumbers);

	const title = titles[currentCourse][currentStep];

	const CourseStepScreens = getNavigationStack(currentCourseNumber, currentStepNumber);

	return (
		<StepScreen>
			<View style={styles.container}>
				<View style={styles.topTextContainer}>
					<Text style={styles.titleText}>
						{title}
					</Text>

					<Text style={styles.progressText}>
						Step {currentStepNumber}, Day {currentDayNumber}
					</Text>
				</View>

				<ActivityCard
					title={DailyActivity.Intention}
					subtitle="Morning"
					onPress={() => navigate(CourseStepScreens.Intention)}
					status={getStatus(currentActivity, Activity.Morning)}
				/>

				<ActivityCard
					title={DailyActivity.Activities}
					subtitle="Afternoon"
					onPress={() => navigate(CourseStepScreens.Activities1)}
					status={getStatus(currentActivity, Activity.Afternoon)}
				/>

				<ActivityCard
					title={DailyActivity.Survey}
					subtitle="Evening"
					onPress={() => navigate(CourseStepScreens.Survey)}
					status={getStatus(currentActivity, Activity.Evening)}
				/>

				<ActivityCard
					title={DailyActivity.Reflection}
					subtitle="Bedtime"
					onPress={() => navigate(CourseStepScreens.Reflection)}
					status={getStatus(currentActivity, Activity.Bedtime)}
				/>
			</View>
		</StepScreen>
	);
};
