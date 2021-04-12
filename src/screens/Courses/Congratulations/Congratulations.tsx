import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@assets/svg/logo.svg';
import { CourseScreens, StepStacks } from 'route/enums';
import { Courses, Steps } from '@redux/types/survey';
import { getUserProgress, getUserProgressNumbers } from '@redux/selector';
import { BackgroundShape } from '@elements/OnboardingScreen/BackgroundShape';
import styles from './Congratulations.styles';

export const nextStack = {
	[Courses.One]: {
		[Steps.One]: StepStacks.Course1Step1,
		[Steps.Two]: StepStacks.Course1Step2,
	},
};


export default () => {
	const { navigate } = useNavigation();

	const { currentCourse, currentStep } = useSelector(getUserProgress);
	const { currentStepNumber, currentDayNumber } = useSelector(getUserProgressNumbers);

	// At this screen, the user's progress has already been advanced.
	const isSameStep = currentDayNumber !== 1;

	const congratulationsText = isSameStep
		? `Congratulations! You\'ve\nCompleted Step ${currentStepNumber}, Day ${currentDayNumber - 1}.`
		: `Congratulations!\nYou are now ready for Step ${currentStepNumber}.`;

	const buttonText = isSameStep
		? `Start Day ${currentDayNumber}`
		: `Start Step ${currentStepNumber}`;

	console.log(currentCourse, currentStep);
	console.log(nextStack[currentCourse][currentStep]);

	const onPress = isSameStep
		? () => navigate(CourseScreens.Home)
		: () => navigate(nextStack[currentCourse][currentStep]);
		// navigation.setOptions({ tabBarVisible: true });

	// useEffect(() => {
	// 	navigation.setOptions({ tabBarVisible: false });
	// }, [ navigation ]);

	return (
		<View style={styles.container}>
			<BackgroundShape drawShapes={[ 26, 27 ]} />
			<SafeAreaView style={styles.contentContainer}>
				<Logo />

				<View>
					<Text style={styles.congratulationsText}>
						{congratulationsText}
					</Text>

					<TouchableOpacity onPress={onPress}>
						<View style={styles.buttonContainer}>
							<Text style={styles.buttonText}>
								{buttonText}
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View />
			</SafeAreaView>
		</View>
	);
};
