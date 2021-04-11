import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Pressable } from 'react-native';
import { CourseScreens } from 'route/enums';
import Check from '@assets/svg/checkmark.svg';
import { Activity } from '@redux/types/user';
import { getUserProgress } from '@redux/selector';
import { advanceUserActivity } from '@redux/action';
import styles from './GoodJob.styles';

const completedActivity = {
	[Activity.Morning]: 'Breakfast',
	[Activity.Afternoon]: 'Lunch-time',
	[Activity.Evening]: 'Dinner-time',
	[Activity.Bedtime]:'Bedtime',
};

const nextActivity = {
	[Activity.Morning]: 'Lunch-time',
	[Activity.Afternoon]: 'Dinner-time',
	[Activity.Evening]: 'Bedtime',
	[Activity.Bedtime]: 'Breakfast',
};

export default () => {
	const dispatch = useDispatch();
	const { navigate } = useNavigation();
	const { currentActivity } = useSelector(getUserProgress);

	const currentActivityText = completedActivity[currentActivity];
	const nextActivityText = nextActivity[currentActivity];

	const completedFullDay = currentActivity === Activity.Bedtime;

	const topText = completedFullDay ? 'Complete!' : 'Good Job';

	const headlineText = completedFullDay
		? 'Congrats on\nCompleting This Day!'
		: `You thought about Loving Yourself during ${currentActivityText}!`;

	const bodyText = completedFullDay
		? 'Tomorrow is waiting for you\nto Love yourself some more!'
		: `Your ${nextActivityText} Alert will signal the next interaction.`;

	const onPressScreen = () => {
		dispatch(advanceUserActivity());
		navigate(completedFullDay ? CourseScreens.Congratulations : CourseScreens.Home);
	};

	return (
		<Pressable onPress={onPressScreen} style={styles.container}>
			<View style={styles.checkCircleContainer}>
				<View style={styles.checkCircle} />

				<View style={styles.checkContainer}>
					<Check />
				</View>
			</View>

			<Text style={styles.goodJobText}>
				{topText}
			</Text>

			<Text style={styles.headlineText}>
				{headlineText}
			</Text>

			<Text style={styles.bodyText}>
				{bodyText}
			</Text>

			{	currentActivity !== Activity.Bedtime
				? (
					<Text style={styles.bodyText}>
						Between alerts, the Home, Journal, and FAQ buttons below are available for use.
					</Text>
				)
				: null
			}

			<Text style={styles.headlineText}>
				Keep going! You got this!
			</Text>

			<View style={styles.nextButton}>
				<Text style={styles.buttonText}>
					Next
				</Text>
			</View>
		</Pressable>
	);
};
