import { OnboardingScreen } from '@elements';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingScreens } from 'route/enums';
import { useNavigation } from '@react-navigation/native';
import styles from './EmotionalResetButton.styles';

const NextButtonWithText = ({ onPress, disabled }: { onPress: () => void, disabled?: boolean }) => (
	<View style={styles.bottomContainer}>
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<View style={[ styles.navButton, disabled && styles.disabled ]}>
				<Text style={[ styles.text, styles.navButtonText ]}>click to listen</Text>
			</View>
		</TouchableOpacity>
	</View>
);

export default () => {
	const { navigate } = useNavigation();
	const [ linksDisabled, setLinksDisabled ] = useState(true);
	console.log({ linksDisabled });

	return (
		<OnboardingScreen
			audioFilename="erb_ready_to_quit_rebecca.mp3"
			drawShapes={[ 7, 25 ]}
			hideBackButton={true}
			onAudioEnd={() => setLinksDisabled(false)}
			nextTarget={OnboardingScreens.BriefOverviewOfButtons}
			title={'Your Emotional\nRESET Button'}
			titleContainerStyle={styles.titleContainerStyle}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>
						Frustrated with your progress? Something making you sad?
					</Text>
					<NextButtonWithText
						onPress={() => navigate(OnboardingScreens.FrustratedWithProgress)}
						disabled={linksDisabled}
					/>
				</View>
				<View>
					<Text style={styles.text}>
						Frustrated with the app technology?
					</Text>
					<NextButtonWithText
						onPress={() => navigate(OnboardingScreens.FrustratedWithApp)}
						disabled={linksDisabled}
					/>
				</View>
				<View>
					<Text style={styles.text}>
						Ready to quit on yourself and the App?
					</Text>
					<NextButtonWithText
						onPress={() => navigate(OnboardingScreens.FrustratedReadyToQuit)}
						disabled={linksDisabled}
					/>
				</View>
			</View>
		</OnboardingScreen>
	);
};
