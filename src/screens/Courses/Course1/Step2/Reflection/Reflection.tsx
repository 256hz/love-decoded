import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import { CourseCommonScreens } from 'route/enums';
import { Course1Step1Screens } from 'route/Steps/Course1Screens';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Days } from '@redux/types/survey';
import { getUserProgress } from '@redux/selector';
import styles from './Reflection.styles';

export default () => {
	const { navigate } = useNavigation();
	const { currentDay } = useSelector(getUserProgress);

	const getAudioFilename = (day: Days) => `step2_${day}_reflections.mp3`;

	const onPress = () => navigate(Course1Step1Screens.Visualization);

	return (
		<StepScreen
			audioFilename={getAudioFilename(currentDay)}
			backTarget={CourseCommonScreens.Home}
			nextTarget={CourseCommonScreens.GoodJob}
		>
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text style={styles.questionText}>
						When you don’t love yourself like you deserve – too often you’ll behave unlovingly toward yourself... without even realizing it.
					</Text>
				</View>
			</View>
		</StepScreen>
	);
};

