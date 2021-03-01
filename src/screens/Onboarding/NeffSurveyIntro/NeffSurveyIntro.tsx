import { useNavigation } from '@react-navigation/native';
import { OnboardingScreen } from '@elements';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getAllSurveys } from 'redux/selector';
import { Screens } from 'route/enums';
import styles from './NeffSurveyIntro.styles';

type SurveyButtonProps = {
	onPress: () => void;
	disabled: boolean;
};

const SurveyButton = ({ onPress, disabled }: SurveyButtonProps) => (
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<View style={styles.surveyButtonContainer}>
			<View style={[ styles.surveyButton, disabled && styles.disabled ]}>
				<Text style={styles.buttonText}>start survey</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default () => {
	const { navigate } = useNavigation();
	const [ nextDisabled, setNextDisabled ] = useState(true);
	console.log(useSelector(getAllSurveys));

	return (
		<OnboardingScreen
			audioFilename="onboarding_22_neff_self_compassion_survey.mp3"
			drawShapes={[ 19, 20 ]}
			onAudioEnd={() => setNextDisabled(false)}
			title={'The Purpose of\nNeff\'s Self-Compassion Scale'}
			titleContainerStyle={styles.titleContainerStyle}
			customButtons={
				<SurveyButton onPress={() => navigate(Screens.NeffSurvey1)} disabled={nextDisabled} />
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
