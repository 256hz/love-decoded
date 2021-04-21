import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@assets/svg/logo.svg';
import { CourseScreens, stepEntryPoints } from 'route/enums';
import { getUserProgress, getUserProgressNumbers } from '@redux/selector';
import { BackgroundShape } from '@elements/OnboardingScreen/BackgroundShape';
import { DayNumber, StepNumber } from 'redux/types/user';
import { titles } from 'util/titles';
import { Courses, Steps } from 'redux/types/survey';
import styles from './Congratulations.styles';

export default () => {
	const { navigate } = useNavigation();

	const { currentCourse, currentStep } = useSelector(getUserProgress);
	const { currentStepNumber, currentDayNumber } = useSelector(getUserProgressNumbers);

	// At this screen, the user's progress has already been advanced.
	const isSameStep = currentDayNumber !== 1;

	const ScreenContent = () => isSameStep
		? <SimpleCongratulations currentStepNumber={currentStepNumber} currentDayNumber={currentDayNumber} />
		: <WaitOneWeek currentCourse={currentCourse} newStep={currentStep} newStepNumber={currentStepNumber} />;

	const buttonText = isSameStep
		? `Start Day ${currentDayNumber}`
		: `Start Step ${currentStepNumber}`;

	const onPress = () => navigate(isSameStep
		? CourseScreens.Home
		: stepEntryPoints[currentCourse]![currentStep]!);

	return (
		<View style={styles.container}>
			<BackgroundShape drawShapes={[ 26, 27 ]} />
			<SafeAreaView style={styles.contentContainer}>
				<Logo />

				<View>
					<ScreenContent />

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

type SimpleCongratulationsProps = {
	currentStepNumber: StepNumber;
	currentDayNumber: DayNumber;
};

const SimpleCongratulations = ({ currentStepNumber, currentDayNumber }: SimpleCongratulationsProps) => (
	<Text style={styles.congratulationsText}>
		{`Congratulations! You\'ve\nCompleted Step ${currentStepNumber}, Day ${currentDayNumber - 1}.`}
	</Text>
);

type WaitOneWeekProps = {
	currentCourse: Courses;
	newStep: Steps;
	newStepNumber: StepNumber;
};

const WaitOneWeek = ({ currentCourse, newStep, newStepNumber }: WaitOneWeekProps) => (
	<View style={styles.waitContainer}>
		<Text style={styles.waitText}>
			Behavioral science requires that we give you at least one week to review this week’s content, add to your list, share your list and journey with others.
		</Text>

		<Text style={styles.waitText}>
			{`The next step, "${titles[currentCourse][newStep]}", will need all of your attention. Enjoy this week as you master discovering your lovable qualities. The app will give you an alert when you are ready for Step ${newStepNumber}.`}
		</Text>

		<Text style={styles.waitText}>
			You continue to have access to the journal, FAQs, and the side bar on your homepage where you can add people to your unconditional community, etc.
		</Text>
	</View>
);
