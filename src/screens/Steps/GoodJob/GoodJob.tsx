import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Pressable } from 'react-native';
import { StepScreens } from 'route/enums';
import { resetRoot } from 'util/navigation';
import Check from '@assets/svg/checkmark.svg';
import { Activity } from '@redux/types/user';
import { getUserProgress } from '@redux/selector';
import { advanceUserActivity, logOut } from 'redux/action';
import styles from './GoodJob.styles';

const nextActivity = {
	[Activity.Morning]: 'Lunch-time',
	[Activity.Afternoon]: 'Dinner-time',
	[Activity.Evening]: 'Bedtime',
};

export default () => {
	const dispatch = useDispatch();
	const { currentActivity } = useSelector(getUserProgress);
	const nextText = nextActivity[currentActivity];

	const onPressScreen = () => {
		// dispatch(logOut());
		dispatch(advanceUserActivity());
		resetRoot(StepScreens.Home);
	};

	return (
		<Pressable onPress={onPressScreen}>
			<View style={styles.container}>
				<View style={styles.checkCircleContainer}>
					<View style={styles.checkCircle} />

					<View style={styles.checkContainer}>
						<Check />
					</View>
				</View>

				<Text style={styles.goodJobText}>
					Good Job
				</Text>

				<Text style={styles.headlineText}>
					You thought about Loving Yourself during Breakfast!
				</Text>

				<Text style={styles.bodyText}>
					Your {nextText} Alert will signal the next interaction.
				</Text>

				<Text style={styles.bodyText}>
					Between alerts, the Home, Journal, and FAQ buttons below are available for use.
				</Text>

				<Text style={styles.headlineText}>
					Keep going! You got this!
				</Text>
			</View>
		</Pressable>
	);
};
