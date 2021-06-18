import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stepGoodJobScreen, stepHomeScreen } from 'route/enums';
import { Course2Step9Screens } from 'route/Steps/Course2Screens';
import { getUserProgress } from '@redux/selector';
import { StepScreen } from '@elements';
import styles from './Reflection.styles';

export default () => {
	const { navigate } = useNavigation();
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);

	const audioFilename = `${currentStep}_${currentDay}_reflections.mp3`;

	const onPress = () => navigate(Course2Step9Screens.Visualization);

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
							As pointed out in Intentions, mistreating yourself flies under the radar.
						</Text>
					</View>

					<View style={styles.bodyText}>
						<Text style={styles.body}>
							Did you allow negative thoughts and worries to linger?
						</Text>
					</View>

					<View style={styles.bodyText}>
						<Text style={styles.body}>
							Did you entertain negative feelings about yourself?
						</Text>
					</View>

					<View style={styles.bodyText}>
						<Text style={styles.body}>
							Did you wish you had a more loving alliance with yourself?
						</Text>
					</View>

					<TouchableOpacity onPress={onPress}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								Guided Meditation
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</StepScreen>
	);
};

