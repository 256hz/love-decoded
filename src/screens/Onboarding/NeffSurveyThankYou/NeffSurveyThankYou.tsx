import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NextArrow from '@assets/svg/next-arrow.svg';
import { OnboardingScreens } from 'route/enums';
import { getNeffAverage } from '@redux/selector';
import { OnboardingScreen } from '@elements';
import { resetAudioPlayer } from '@redux/action';
import styles from './NeffSurveyThankYou.styles';

const NextButtonWithText = ({ onPress }: { onPress: () => void }) => (
	<View style={styles.bottomContainer}>
		<Text style={styles.text}>More information about your score:</Text>
		<TouchableOpacity onPress={onPress}>
			<View style={styles.navButton}>
				<Text style={[ styles.text, styles.navButtonText ]}>Next</Text>
				<NextArrow />
			</View>
		</TouchableOpacity>
	</View>
);

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const neffSurveyScore = useSelector(getNeffAverage);
	const onPress = () => {
		navigate(OnboardingScreens.NeffSurveyBreakdown);
		dispatch(resetAudioPlayer(true, 'neffSurveyThankYou-onNext'));
	};

	return (
		<OnboardingScreen
			drawShapes={[ 22, 23, 24 ]}
			title={'Thank You for Taking\nThis Initial Survey'}
			titleContainerStyle={styles.titleContainerStyle}
			customButtons={<></>}
			customBottomSection={<NextButtonWithText onPress={onPress} />}
		>
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.text}>
					When you take it again at the end of the course you will be able to see, from a scientific perspective, how much progress you made. From day to day we all tend to have ups and downs, which is not what we want to use to measure our progress.
				</Text>
				<View style={styles.middleContainer}>
					<Text style={[ styles.text, styles.bold ]}>
						Your Score
					</Text>
					<View style={styles.scoreContainer}>
						<Text style={styles.headline}>{neffSurveyScore}</Text>
					</View>
				</View>
				<View style={styles.scoreExplanationContainer}>
					<Text style={[ styles.text, styles.bold ]}>
						Average Score is around 3.0
					</Text>
					<Text style={[ styles.text, styles.bold ]}>1.0 - 2.5  <Text style={styles.text}>Indicates low self-compassion</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>2.5 - 3.5  <Text style={styles.text}>Indicates moderate self-compassion</Text></Text>
					<Text style={[ styles.text, styles.bold ]}>3.5 - 5.0  <Text style={styles.text}>Indicates high self-compassion</Text></Text>
				</View>
			</ScrollView>
		</OnboardingScreen>
	);
};
