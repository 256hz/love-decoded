import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course2step8prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you preface daily rituals with “....because I love myself.”?',
		key: EndOfDaySurveys.Course2Step8Survey1,
	},
	{
		prompt: 'How many times did you say, “...because I love myself” in order to accomplish a task you weren’t excited about doing?',
		key: EndOfDaySurveys.Course2Step8Survey2,
	},
	{
		prompt: 'How many times during the day did you find yourself saying “...because I love myself.” as you worked on changing one of your unloving behaviors?',
		key: EndOfDaySurveys.Course2Step8Survey3,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course2step8prompts}
		title={titles.course2.step8!}
	/>
);
