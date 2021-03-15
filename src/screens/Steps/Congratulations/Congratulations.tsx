import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StepScreens } from 'route/enums';
import Logo from '@assets/svg/logo.svg';
import { BackgroundShape } from '@elements/OnboardingScreen/BackgroundShape';
import { getUserProgress } from '@redux/selector';
import styles from './Congratulations.styles';

export default ({ navigation }) => {
	const { navigate } = useNavigation();
	const { currentStep, currentDay } = useSelector(getUserProgress);

	const isSameStep = currentDay !== 1;

	const completedDayText = isSameStep ? `${currentDay - 1}` : '';

	const completedStepText = isSameStep ? `${currentStep}` : '';

	const congratulationsText = isSameStep
		? `Congratulations! You\'ve\nCompleted Step ${completedStepText}, Day ${completedDayText}.`
		: `Congratulations!\nYou are now ready for Step ${currentStep}.`;

	const buttonText = isSameStep
		? `Start Day ${currentDay}`
		: `Start Step ${currentStep}`;

	const onPress = () => {
		navigate(StepScreens.Home);
		// navigation.setOptions({ tabBarVisible: true });
	};

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
