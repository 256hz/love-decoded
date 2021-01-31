import { useNavigation } from '@react-navigation/native';
import { OnboardingScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getAllSurveys } from 'redux/selector';
import { Screens } from 'route/OnboardingStack';
import styles from './NeffSurveyIntro.styles';

type SurveyButtonProps = {
	onPress: () => void;
};

const SurveyButton = ({ onPress }: SurveyButtonProps) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.surveyButtonContainer}>
			<View style={styles.surveyButton}>
				<Text style={styles.buttonText}>start survey</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default () => {
	const { navigate } = useNavigation();
	console.log(useSelector(getAllSurveys));

	return (
		<OnboardingScreen
			audioFilename="music128.mp3"
			drawShapes={[ 19, 20 ]}
			title={'The Purpose of\nNeff\'s Self-Compassion Scale'}
			titleContainerStyle={styles.titleContainerStyle}
			customButtons={<SurveyButton onPress={() => navigate(Screens.NeffSurvey1)} />}
		>
			<View style={styles.container}>
				<Text style={styles.text}>
					This 3-minute survey is not optional because we want you to know, using science, how you are actually progressing.
				</Text>
			</View>
		</OnboardingScreen>
	);
};
