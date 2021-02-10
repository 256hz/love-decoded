import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Screens } from 'route/OnboardingStack';
import NextArrow from '@assets/svg/next-arrow.svg';
import { setNeffSurveyResponse } from '@redux/action';
import { getNeffResponseByPageIndex } from '@redux/selector';
import { NeffSurveyPageIndex, NeffSurveyResponse } from '@redux/types/survey';
import { OnboardingScreen, RadioButtons } from '@elements';
import { useNavigation } from '@react-navigation/native';
import styles from './NeffSurveyScreen.styles';

const getNeffSurveyButtons = (reverseScoring?: boolean) => [
	{
		label: '(1)  Very Often',
		value: (reverseScoring ? 5 : 1) as NeffSurveyResponse,
	},
	{
		label: '(2)  Often',
		value: (reverseScoring ? 4 : 2) as NeffSurveyResponse,
	},
	{
		label: '(3)  Sometimes',
		value: 3 as NeffSurveyResponse,
	},
	{
		label: '(4)  Almost Never',
		value: (reverseScoring ? 2 : 4) as NeffSurveyResponse,
	},
	{
		label: '(5)  Never',
		value: (reverseScoring ? 1 : 5) as NeffSurveyResponse,
	},
];

const NextButtonWithText = ({ disabled, onPress }: { disabled: boolean, onPress: () => void }) => (
	<View style={styles.bottomContainer}>
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<View style={styles.navButton}>
				<Text style={[ styles.text, styles.navButtonText ]}>Next</Text>
				<NextArrow />
			</View>
		</TouchableOpacity>
	</View>
);

type NeffSurveyScreenProps = {
	nextTarget: Screens,
	pageIndex: NeffSurveyPageIndex,
	prompt: string,
	reverseScoring?: boolean;
};

export default ({ nextTarget, pageIndex, prompt, reverseScoring = false }: NeffSurveyScreenProps) => {
	const dispatch = useDispatch();
	const { navigate } = useNavigation();
	const currentResponse = useSelector(getNeffResponseByPageIndex(pageIndex));
	const setQuestionResponse = (value: NeffSurveyResponse) => dispatch(setNeffSurveyResponse(pageIndex, value));

	return (
		<OnboardingScreen
			drawShapes={[ 20, 21 ]}
			customButtons={<></>}
			customBottomSection={
				<NextButtonWithText
					disabled={!currentResponse}
					onPress={() => navigate(nextTarget)}
				/>
			}
			title={'Neff\'s Self-Compassion\nScale Survey'}
			titleContainerStyle={styles.titleContainerStyle}
		>
			<View style={styles.container}>
				<Text style={styles.text}>
					{prompt}
				</Text>

				<View style={styles.radioButtonContainer}>
					<RadioButtons
						buttons={getNeffSurveyButtons(reverseScoring)}
						containerStyle={styles.radioButtonContainerStyle}
						selectedValue={currentResponse}
						setSelectedValue={setQuestionResponse}
					/>
				</View>

				<Text style={styles.bold}>{pageIndex} of 12</Text>
			</View>
		</OnboardingScreen>
	);
};
