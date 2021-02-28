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
<<<<<<< HEAD
<<<<<<< HEAD
=======
			nextTarget={OnboardingScreens.BriefOverviewOfButtons}
>>>>>>> Tab and drawer navigators
=======
			nextTarget={OnboardingScreens.BriefOverviewOfButtons}
>>>>>>> Tab and drawer navigators
			title={'Your Emotional\nRESET Button'}
			titleContainerStyle={styles.titleContainerStyle}
			hideBackButton={true}
			onAudioEnd={() => setLinksDisabled(false)}
			nextTarget={Screens.BriefOverviewOfButtons}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>
						Frustrated with your progress? Something making you sad?
					</Text>
<<<<<<< HEAD
<<<<<<< HEAD
					<NextButtonWithText
						onPress={() => navigate(Screens.FrustratedWithProgress)}
						disabled={linksDisabled}
					/>
=======
					<NextButtonWithText onPress={() => navigate(OnboardingScreens.FrustratedWithProgress)} />
>>>>>>> Tab and drawer navigators
=======
					<NextButtonWithText onPress={() => navigate(OnboardingScreens.FrustratedWithProgress)} />
>>>>>>> Tab and drawer navigators
				</View>
				<View>
					<Text style={styles.text}>
						Frustrated with the app technology?
					</Text>
<<<<<<< HEAD
<<<<<<< HEAD
					<NextButtonWithText
						onPress={() => navigate(Screens.FrustratedWithApp)}
						disabled={linksDisabled}
					/>
=======
					<NextButtonWithText onPress={() => navigate(OnboardingScreens.FrustratedWithApp)} />
>>>>>>> Tab and drawer navigators
=======
					<NextButtonWithText onPress={() => navigate(OnboardingScreens.FrustratedWithApp)} />
>>>>>>> Tab and drawer navigators
				</View>
				<View>
					<Text style={styles.text}>
						Ready to quit on yourself and the App?
					</Text>
<<<<<<< HEAD
<<<<<<< HEAD
					<NextButtonWithText
						onPress={() => navigate(Screens.FrustratedReadyToQuit)}
						disabled={linksDisabled}
					/>
=======
					<NextButtonWithText onPress={() => navigate(OnboardingScreens.FrustratedReadyToQuit)} />
>>>>>>> Tab and drawer navigators
=======
					<NextButtonWithText onPress={() => navigate(OnboardingScreens.FrustratedReadyToQuit)} />
>>>>>>> Tab and drawer navigators
				</View>
			</View>
		</OnboardingScreen>
	);
};
