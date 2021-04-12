import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { CourseScreens } from 'route/enums';
import { StepScreen } from '@elements';
import { getUserFirstName, getUserProgressNumbers } from '@redux/selector';
import CourseButton from './CourseButton';
import ProgressBar from './ProgressBar';
import styles from './Home.styles';
import ContentReview from './ContentReview';

export default () => {
	const { navigate } = useNavigation();
	const onPress = () => navigate(CourseScreens.DayOverview);

	const { currentActivityNumber: currentActivity, currentDayNumber: currentDay, currentStepNumber: currentStep } = useSelector(getUserProgressNumbers);
	const firstName = useSelector(getUserFirstName);
	// currentActivity is 1-indexed
	const progressPercent = (currentActivity - 1) * 25;

	return (
		<StepScreen scrollDisabled>
			<View style={styles.container}>

				<View style={styles.titleContainer}>
					<Text style={styles.headline}>
						Good Morning {firstName}
					</Text>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>
						{'Today\'s Progress'}
					</Text>
				</View>

				<View style={styles.progressTextContainer}>
					<Text style={styles.progressText}>
						Step {currentStep} - Day {currentDay}
					</Text>
					<Text style={styles.showMore}>
						show more
					</Text>
				</View>

				<ProgressBar progressPercent={progressPercent} />

				<CourseButton onPress={onPress} />

				<ContentReview />
			</View>

		</StepScreen>
	);
};
