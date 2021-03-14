import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setStepSurveyResponse } from '@redux/action';
import { getStepSurvey, getUserProgress } from '@redux/selector';
import { Courses, DayFromNumber, Steps } from '@redux/types/survey';
import { TitleWithProgressHeader } from '@elements/Header/HeaderOptions';
import RootState from 'redux/RootState';
import styles from './Survey.styles';

const prompts = [
	{
		prompt: 'How many lovable qualities did you write down today?',
		key: 'lovable_qualities_write_down',
	},
	{
		prompt: 'How many of your lovable qualities did you share with others?',
		key: 'lovable_qualities_share_with_others',
	},
	{
		prompt: 'How many of your lovable quailties can you now recite by memory?',
		key: 'lovable_qualities_recite_by_memory',
	},
	{
		prompt: 'How many times did you smile thinking about your loveable qualities?',
		key: 'lovable_qualities_smile_thinking',
	},
	{
		prompt: 'How many times did you think it was silly?',
		key: 'lovable_qualities_silly',
	},
];

export default ({ navigation }) => {
	const dispatch = useDispatch();
	const { currentDay } = useSelector(getUserProgress);
	const [ currentPrompt, setCurrentPrompt ] = useState(0);

	// nav to this in DayOverview

	// make survey in redux, reducer/selector?
	const response = useSelector<RootState>(
		getStepSurvey(Courses.One, Steps.One, DayFromNumber[currentDay], prompts[currentPrompt].key),
	);

	const onPress = (value) => dispatch(
		setStepSurveyResponse(Courses.One, Steps.One, DayFromNumber[currentDay], prompts[value].key, value),
		// set timeout for moving to the next prompt or nav to good job
	);

	useEffect(() => {
		navigation.setOptions(
			TitleWithProgressHeader(currentPrompt, prompts.length, 'Discovering Your Lovable Qualities', 'Survey'),
		);
	}, [ currentPrompt, setCurrentPrompt, navigation ]);

	return (
		<View style={styles.container}>
			<Text>{prompts[currentPrompt]}</Text>
			<View>
				<SurveyButton label="0-2" value="0-2" onPress={onPress} response={response} />
				<SurveyButton label="3-5" value="3-5" onPress={onPress} response={response} />
				<SurveyButton label="6+" value="6+" onPress={onPress} response={response} />
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
