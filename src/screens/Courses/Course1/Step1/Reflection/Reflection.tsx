import React from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import { CourseScreens, Course1Step1Screens } from 'route/enums';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { DayFromNumber, Days } from '@redux/types/survey';
import { useSelector } from 'react-redux';
import { getUserProgress } from '@redux/selector';
import styles from './Reflection.styles';

const audio = {
	[Days.One]: 'step1_day1_reflections.mp3',
	[Days.Two]: 'step1_day2_reflections.mp3',
	[Days.Three]: 'step1_day3_reflections.mp3',
	[Days.Four]: 'step1_day4_reflections.mp3',
	[Days.Five]: 'step1_day5_reflections.mp3',
	[Days.Six]: 'step1_day6_reflections.mp3',
	[Days.Seven]: 'step1_day7_reflections.mp3',
};

export default () => {
	const { navigate } = useNavigation();
	const { currentDay } = useSelector(getUserProgress);

	const onPress = () => navigate(Course1Step1Screens.Visualization);

	return (
		<StepScreen
			audioFilename={audio[DayFromNumber[currentDay]]}
			backTarget={CourseScreens.Home}
			nextTarget={CourseScreens.GoodJob}
		>
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text style={styles.questionText}>
						What did it feel like to write and share your loveable and caring qualities with others?
					</Text>
				</View>

				<View style={styles.contentContainer}>
					<Text style={styles.headline}>
						Optional
					</Text>

					<Text style={styles.body}>
						{'If you would like to do guided\nmeditation/visualization'}
					</Text>

					<TouchableOpacity onPress={onPress}>
						<View style={styles.button}>
							<Text style={styles.questionText}>
								click here
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</StepScreen>
	);
};

