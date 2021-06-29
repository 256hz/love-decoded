import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course2step10prompts: SurveyPrompt[] = [
	{
		prompt: 'How often did you give another the silent treatment?',
		key: EndOfDaySurveys.Course2Step10Survey1,
	},
	{
		prompt: 'How often did you refuse to discuss an issue that upset another?',
		key: EndOfDaySurveys.Course2Step10Survey2,
	},
	{
		prompt: 'How often did you get caught up in who was right and who was wrong?',
		key: EndOfDaySurveys.Course2Step10Survey3,
	},
	{
		prompt: 'How often did you hold on to negative feelings about others?',
		key: EndOfDaySurveys.Course2Step10Survey4,
	},
	{
		prompt: 'How often did you go ‘Tit for Tat’, getting back at someone who hurt you feelings?',
		key: EndOfDaySurveys.Course2Step10Survey5,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course2step10prompts}
		title={titles.step10!}
	/>
);
