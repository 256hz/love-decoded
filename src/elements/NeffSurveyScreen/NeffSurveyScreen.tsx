import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingScreens } from 'route/enums';
import NextArrow from '@assets/svg/next-arrow.svg';
import { setNeffSurveyResponse } from '@redux/action';
import { getNeffResponseByPageIndex } from '@redux/selector';
import { NeffSurveyPageIndex, NeffSurveyResponse } from '@redux/types/survey';
import { OnboardingScreen } from '@elements/OnboardingScreen';
import { RadioButtons } from '@elements/RadioButtons';
import styles from './NeffSurveyScreen.styles';

const getNeffSurveyButtons = (reverseScoring?: boolean) => [
	{
		label: '(1)  Very Often',
		value: (reverseScoring ? 5 : 1),
	},
	{
		label: '(2)  Often',
		value: (reverseScoring ? 4 : 2),
	},
	{
		label: '(3)  Sometimes',
		value: 3,
	},
	{
		label: '(4)  Almost Never',
		value: (reverseScoring ? 2 : 4),
	},
	{
		label: '(5)  Never',
		value: (reverseScoring ? 1 : 5),
	},
];

const NextButtonWithText = ({ disabled, onPress }: { disabled: boolean, onPress: () => void }) => (
	<View style={styles.bottomContainer}>
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<View style={[ styles.navButton, disabled && styles.disabled ]}>
				<Text style={[ styles.text, styles.navButtonText ]}>Next</Text>
				<NextArrow />
			</View>
		</TouchableOpacity>
	</View>
);

type NeffSurveyScreenProps = {
	nextTarget: OnboardingScreens,
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
					disabled={currentResponse === 0}
					onPress={() => navigate(nextTarget)}
				/>
			}
			title={"Neff's Self-Compassion\nScale Survey"}
			titleContainerStyle={styles.titleContainerStyle}
		>
			<View style={styles.container}>
				<View style={styles.prompt}>
					<Text style={styles.text}>
						{prompt}
					</Text>
				</View>

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
