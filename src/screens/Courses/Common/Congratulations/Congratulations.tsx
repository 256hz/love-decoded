import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CourseCommonScreens, stepEntryPoints } from 'route/enums';
import Logo from '@assets/svg/logo.svg';
import { titles } from '@util/titles';
import { getUserProgress, getUserProgressNumbers } from '@redux/selector';
import { DayNumber, StepNumber } from '@redux/types/user';
import { Courses, Steps } from '@redux/types/survey';
import { OnboardingScreen } from '@elements';
import styles from './Congratulations.styles';

export default () => {
	const { navigate } = useNavigation();

	const { currentCourse, currentStep } = useSelector(getUserProgress);
	const { currentStepNumber, currentDayNumber } = useSelector(getUserProgressNumbers);

	// At this screen, the user's progress has already been advanced, so if currentDayNumber is 1, they are on a new step.
	const isSameStep = currentDayNumber !== 1;

	const ScreenContent = () => isSameStep
		? <DayCongratulations
			currentStepNumber={currentStepNumber}
			currentDayNumber={currentDayNumber}
		/>
		: <StepCongratulations
			currentCourse={currentCourse}
			newStep={currentStep}
			newStepNumber={currentStepNumber}
		/>;

	const buttonText = isSameStep
		? `Start Day ${currentDayNumber}`
		: 'Back to Home';

	const onPress = () => navigate(isSameStep
		? CourseCommonScreens.Home
		: stepEntryPoints[currentCourse]![currentStep]!);

	return (
		<OnboardingScreen
			customButtons={<></>}
			drawShapes={[ 26, 27 ]}
			hideBackgroundImage
		>
			<View style={styles.contentContainer}>
				<Logo />

				{ isSameStep
					? (
						<>
							<View>
								<ScreenContent />
								<NextButton buttonText={buttonText} onPress={onPress} />
							</View>

							<View />
						</>
					)
					: (
						<>
							<ScreenContent />
							<NextButton buttonText={buttonText} onPress={onPress} />
						</>
					)}
			</View>
		</OnboardingScreen>
	);
};

const NextButton = ({ buttonText, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.buttonContainer}>
			<Text style={styles.buttonText}>
				{buttonText}
			</Text>
		</View>
	</TouchableOpacity>
);

type SimpleCongratulationsProps = {
	currentStepNumber: StepNumber;
	currentDayNumber: DayNumber;
};

const DayCongratulations = ({ currentStepNumber, currentDayNumber }: SimpleCongratulationsProps) => (
	<Text style={styles.congratulationsText}>
		{`Congratulations! You\'ve\nCompleted Step ${currentStepNumber}, Day ${currentDayNumber - 1}.`}
	</Text>
);

type WaitOneWeekProps = {
	currentCourse: Courses;
	newStep: Steps;
	newStepNumber: StepNumber;
};

const StepCongratulations = ({ currentCourse, newStep, newStepNumber }: WaitOneWeekProps) => (
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
