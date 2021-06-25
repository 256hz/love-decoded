import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stepGoodJobScreen, stepHomeScreen } from 'route/enums';
import { Course2Step14Screens } from 'route/Steps/Course2Screens';
import { getUserProgress } from '@redux/selector';
import { StepScreen } from '@elements';
import styles from './Reflection.styles';

export default () => {
	const { navigate } = useNavigation();
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);

	const audioFilename = `${currentStep}_${currentDay}_reflections.mp3`;

	const onPress = () => navigate(Course2Step14Screens.Visualization);

	return (
		<StepScreen
			audioFilename={audioFilename}
			backTarget={stepHomeScreen[currentCourse][currentStep]}
			nextTarget={stepGoodJobScreen[currentCourse][currentStep]}
		>
			<View style={styles.container}>

				<View style={styles.contentContainer}>

					<View style={styles.bodyText}>
						<Text style={styles.body}>
						Forgiving others is similar to letting go of resentments, except we want to practice it in the present moment. Resentments can become decades old. Forgiving others in the moment saves us from having to carry around a resentment (emotional garbage) for years. 
						</Text>
					</View>

					<View style={styles.bodyText}>
						<Text style={styles.body}>
						Don’t be surprised if some people you want to forgive don’t accept it. They might not think they did anything wrong that needs forgiving, and therefore don’t see why they should accept responsibility for it.  
						</Text>
					</View>

					<View style={styles.boldText}>
						<Text style={styles.boldText}>
						Forgive Them Anyway
						</Text>
					</View>

				</View>
			</View>
		</StepScreen>
	);
};

