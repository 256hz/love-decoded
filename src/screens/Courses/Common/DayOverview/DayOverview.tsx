import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
	Course1Step1Screens,
	Course1Step2Screens,
	Course1Step3Screens,
} from 'route/Steps/Course1Screens';

import { getUserProgress, getUserProgressNumbers } from '@redux/selector';
import { Activity, CourseNumber, StepNumber } from '@redux/types/user';
import { DailyActivity, titles } from '@util/titles';
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

const getDestinations = (currentCourseNumber: CourseNumber, currentStepNumber: StepNumber) => {
	switch (currentCourseNumber) {
		case 1: {
			switch (currentStepNumber) {
				case 1: return Course1Step1Screens;
				case 2: return Course1Step2Screens;
				case 3: return Course1Step3Screens;
				default: return Course1Step1Screens;
			}
		}
		default: return Course1Step1Screens;
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

	const CourseStepScreens = getDestinations(currentCourseNumber, currentStepNumber);

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
