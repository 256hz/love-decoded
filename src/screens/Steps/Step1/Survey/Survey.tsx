import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setDaySurveyResponse } from '@redux/action';
import { getDaySurvey, getUserProgress } from '@redux/selector';
import {
	Courses, DayFromNumber, Steps, Surveys,
} from '@redux/types/survey';
import { TitleWithProgressHeader } from '@elements/Header/HeaderOptions';
import RootState from '@redux/RootState';
import { useNavigation } from '@react-navigation/native';
import { StepScreens } from 'route/enums';
import NavButtons from 'elements/AudioPlayerNavigator/NavButtons';
import styles from './Survey.styles';

const prompts = [
	{
		prompt: 'How many lovable qualities did you write down today?',
		key: Surveys.LovableQualitiesWriteDown,
	},
	{
		prompt: 'How many of your lovable qualities did you share with others?',
		key: Surveys.LovableQualitiesShare,
	},
	{
		prompt: 'How many of your lovable quailties can you now recite by memory?',
		key: Surveys.LovableQualitiesRecite,
	},
	{
		prompt: 'How many times did you smile thinking about your loveable qualities?',
		key: Surveys.LovableQualitiesSmile,
	},
	{
		prompt: 'How many times did you think it was silly?',
		key: Surveys.LovableQualitiesSilly,
	},
];

export default ({ navigation }) => {
	const dispatch = useDispatch();
	const { navigate } = useNavigation();

	const timeoutRef = useRef(-1);
	const { currentDay } = useSelector(getUserProgress);
	const [ currentPrompt, setCurrentPrompt ] = useState(0);

	const response = useSelector<RootState>(
		getDaySurvey(Courses.One, Steps.One, DayFromNumber[currentDay], prompts[currentPrompt].key),
	);


	const onPress = (value: string) => {
		dispatch(setDaySurveyResponse(
			Courses.One,
			Steps.One,
			DayFromNumber[currentDay],
			prompts[currentPrompt].key,
			value,
		));

		timeoutRef.current = setTimeout(() => {
			currentPrompt < prompts.length - 1
				? setCurrentPrompt(currentPrompt + 1)
				: navigate(StepScreens.GoodJob);
		}, 500);
	};

	useEffect(() => {
		navigation.setOptions(
			TitleWithProgressHeader(currentPrompt, prompts.length, 'Discovering Your Lovable Qualities', 'Survey'),
		);

		return () => clearTimeout(timeoutRef.current);
	}, [ currentPrompt, setCurrentPrompt, navigation ]);

	return (
		<View style={styles.container}>
			<View style={styles.promptContainer}>
				{ prompts?.[currentPrompt]?.prompt
					? (
						<Text style={styles.promptText}>
							{prompts[currentPrompt].prompt}
						</Text>
					)
					: null
				}
			</View>

			<View style={styles.buttonsContainer}>
				<SurveyButton label="0-2" value="0-2" onPress={onPress} response={response as string} />
				<SurveyButton label="3-5" value="3-5" onPress={onPress} response={response as string} />
				<SurveyButton label="6+" value="6+" onPress={onPress} response={response as string} />
			</View>

			<NavButtons
				backNavigationDisabled
				hideNextButton
				hideBackButton={currentPrompt === 0}
				onPressBack={() => setCurrentPrompt(currentPrompt - 1)}
			/>
		</View>
	);
};

type SurveyButtonProps = {
	label: string;
	value: string;
	onPress: (arg: string) => void;
	response: string;
};

const SurveyButton = ({ label, value, onPress, response }: SurveyButtonProps) => {
	const selected = response === value;

	return (
		<TouchableOpacity onPress={() => onPress(value)}>
			<View style={[ styles.surveyButton, selected && styles.selected ]}>
				<Text style={[ styles.buttonText, selected && styles.buttonTextSelected ]}>
					{label}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
