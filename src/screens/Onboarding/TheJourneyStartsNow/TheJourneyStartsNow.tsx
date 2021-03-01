import { useNavigation } from '@react-navigation/native';
import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Screen } from 'react-native-screens';
import { Screens } from 'route/enums';
import styles from './TheJourneyStartsNow.styles';

export default () => {
	const { navigate } = useNavigation();

	return (
		<OnboardingScreen
			drawShapes={[ 3, 7, 12 ]}
			customButtons={<></>}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<Text style={styles.bodyText}>
						This course is designed to get you to the next level of mental, emotional, and physical health.
					</Text>
				</View>
				<View style={styles.highlightContainer}>
					<Text style={styles.highlightText}>
						The Journey Starts Now!
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigate(Screens.SignupForm)}>
						<View style={styles.button}>
							<Text style={[ styles.highlightText, styles.buttonText ]}>
								Sign Up
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</OnboardingScreen>
	);
};
