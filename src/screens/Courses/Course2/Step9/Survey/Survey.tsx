import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course2step9prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you ignore being stressed or tired?',
		key: EndOfDaySurveys.Course2Step9Survey1,
	},
	{
		prompt: 'How many times did you drink coffee, soda, or eat unhealthy foods instead of drinking water or eating healthy foods?',
		key: EndOfDaySurveys.Course2Step9Survey2,
	},
	{
		prompt: 'How many times did you feel uncomfortable expressing your upset?',
		key: EndOfDaySurveys.Course2Step9Survey3,
	},
	{
		prompt: 'How many times did you get angry and critical with yourself after making  a mistake?',
		key: EndOfDaySurveys.Course2Step9Survey4,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course2step9prompts}
		title={titles.course2.step8!}
	/>
);
