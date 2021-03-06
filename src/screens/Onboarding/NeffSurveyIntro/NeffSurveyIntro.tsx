import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DEMO_MODE } from '@util/demoMode';
import { OnboardingScreens } from 'route/enums';
import { OnboardingScreen } from '@elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './NeffSurveyIntro.styles';

type SurveyButtonProps = {
	onPress: () => void;
	disabled?: boolean;
};

const SurveyButton = ({ onPress, disabled }: SurveyButtonProps) => (
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<View style={styles.surveyButtonContainer}>
			<View style={[ styles.surveyButton, disabled && styles.disabled ]}>
				<Text style={styles.buttonText}>Start survey</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default () => {
	const { navigate } = useNavigation();
	const [ nextDisabled, setNextDisabled ] = useState(!DEMO_MODE);

	return (
		<OnboardingScreen
			audioFilename="onboarding_22_neff_self_compassion_survey.mp3"
			drawShapes={[ 19, 20 ]}
			onAudioEnd={() => setNextDisabled(false)}
			title={"The Purpose of\nNeff's Self-Compassion Scale"}
			titleContainerStyle={styles.titleContainerStyle}
			customButtons={
				<SurveyButton
					disabled={nextDisabled}
					onPress={() => navigate(OnboardingScreens.NeffSurvey1)}
				/>
			}
		>
			<View style={styles.container}>
				<Text style={styles.text}>
					This 3-minute survey is not optional because we want you to know, using science, how you are actually progressing.
				</Text>
			</View>
		</OnboardingScreen>
	);
};
