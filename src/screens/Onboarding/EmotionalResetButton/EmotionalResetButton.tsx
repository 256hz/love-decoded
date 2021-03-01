import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Screens } from 'route/enums';
import { useNavigation } from '@react-navigation/native';
import styles from './EmotionalResetButton.styles';

const NextButtonWithText = ({ onPress }: { onPress: () => void }) => (
	<View style={styles.bottomContainer}>
		<TouchableOpacity onPress={onPress}>
			<View style={styles.navButton}>
				<Text style={[ styles.text, styles.navButtonText ]}>click to listen</Text>
			</View>
		</TouchableOpacity>
	</View>
);

export default () => {
	const { navigate } = useNavigation();

	return (
		<OnboardingScreen
			audioFilename="erb_ready_to_quit_rebecca.mp3"
			drawShapes={[ 7, 25 ]}
			nextTarget={Screens.BriefOverviewOfButtons}
			title={'Your Emotional\nRESET Button'}
			titleContainerStyle={styles.titleContainerStyle}
			hideBackButton={true}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>
						Frustrated with your progress? Something making you sad?
					</Text>
					<NextButtonWithText onPress={() => navigate(Screens.FrustratedWithProgress)} />
				</View>
				<View>
					<Text style={styles.text}>
						Frustrated with the app technology?
					</Text>
					<NextButtonWithText onPress={() => navigate(Screens.FrustratedWithApp)} />
				</View>
				<View>
					<Text style={styles.text}>
						Ready to quit on yourself and the App?
					</Text>
					<NextButtonWithText onPress={() => navigate(Screens.FrustratedReadyToQuit)} />
				</View>
			</View>
		</OnboardingScreen>
	);
};
