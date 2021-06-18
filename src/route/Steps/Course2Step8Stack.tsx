import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DailyActivity, titles } from '@util/titles';
import {
	BackHeader,
	CloseHeader,
	DrawerHeader,
	EmptyHeader,
	headerStyle,
	TitleHeader,
	TitleWithProgressHeader,
} from '@elements/Headers/Headers';

import HomeScreen from '@screens/Courses/Tabs/Home';
import DayOverviewScreen from '@screens/Courses/Common/DayOverview';
import GoodJobScreen from '@screens/Courses/Common/GoodJob';
import IntentionScreen from '@screens/Courses/Course2/Step8/Intention';
import Step8Activities1Screen from '@screens/Courses/Course2/Step8/Activities1';
import Step8Activities2Screen from '@screens/Courses/Course2/Step8/Activities2';
import Step8Activities3Screen from '@screens/Courses/Course2/Step8/Activities3';
import Step8Resources1Screen from '@screens/Courses/Course2/Step8/Resources1';
import Step8Resources2Screen from '@screens/Courses/Course2/Step8/Resources2';
import Step8SurveyScreen from '@screens/Courses/Course2/Step8/Survey';
import Step8ReflectionScreen from '@screens/Courses/Course2/Step8/Reflection';
import { course2step8prompts } from '@screens/Courses/Course2/Step8/Survey/Survey';
import { Course2Step8Screens } from './Course2Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.step8;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course2Step8Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course2Step8Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course2Step8Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title!, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Activities1}
				component={Step8Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Activities2}
				component={Step8Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Activities3}
				component={Step8Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Resources1}
				component={Step8Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Resources2}
				component={Step8Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Survey}
				component={Step8SurveyScreen}
				options={TitleWithProgressHeader(0, course2step8prompts.length, title!, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course2Step8Screens.Reflection}
				component={Step8ReflectionScreen}
				options={TitleHeader(title!, DailyActivity.NightlyReflection)}
			/>

		</StepStack.Navigator>
	);
};
