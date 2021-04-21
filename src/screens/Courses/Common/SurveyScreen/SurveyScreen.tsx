import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CourseCommonScreens } from 'route/enums';
import { DailyActivity } from '@util/titles';
import RootState from '@redux/RootState';
import { setDaySurveyResponse } from '@redux/action';
import { getDaySurvey, getUserProgress } from '@redux/selector';
import { EndOfDaySurveys } from '@redux/types/survey';
import { TitleWithProgressHeader } from '@elements/Header/HeaderOptions';
import NavButtons from '@elements/AudioPlayerNavigator/NavButtons';
import styles from './SurveyScreen.styles';

export type SurveyPrompt = {
	prompt: string;
	key: EndOfDaySurveys;
};

type Props = {
	navigation: any;
	prompts: SurveyPrompt[];
	title: string;
};

export default ({ navigation, prompts, title }: Props) => {
	const dispatch = useDispatch();
	const { navigate, isFocused } = useNavigation();

	const timeoutRef = useRef(-1);
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);
	const [ currentPrompt, setCurrentPrompt ] = useState(0);

	const response = useSelector<RootState>(
		getDaySurvey(currentCourse, currentStep, currentDay, prompts[currentPrompt].key),
	);

	const onPress = (value: string) => {
		dispatch(setDaySurveyResponse(
			currentCourse,
			currentStep,
			currentDay,
			prompts[currentPrompt].key,
			value,
		));

		timeoutRef.current = setTimeout(() => {
			currentPrompt < prompts.length - 1
				? setCurrentPrompt(currentPrompt + 1)
				: navigate(CourseCommonScreens.GoodJob);
		}, 500);
	};

	useEffect(() => {
		if (!isFocused()) {
			clearTimeout(timeoutRef.current);
			return;
		}

		// Advance the progres header dot
		navigation.setOptions(
			TitleWithProgressHeader(currentPrompt, prompts.length, title, DailyActivity.Survey),
		);

		return () => clearTimeout(timeoutRef.current);
	}, [
		currentPrompt,
		isFocused,
		navigation,
		prompts.length,
		setCurrentPrompt,
		title,
	]);

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

			<View style={styles.navContainer}>
				<NavButtons
					backNavigationDisabled
					hideNextButton
					hideBackButton={currentPrompt === 0}
					onPressBack={() => setCurrentPrompt(currentPrompt - 1)}
				/>
			</View>
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
