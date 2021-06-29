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
import IntentionScreen from '@screens/Courses/Course2/Step10/Intention';
import Step10Activities1Screen from '@screens/Courses/Course2/Step10/Activities1';
import Step10Activities2Screen from '@screens/Courses/Course2/Step10/Activities2';
import Step10Activities3Screen from '@screens/Courses/Course2/Step10/Activities3';
import Step10Resources1Screen from '@screens/Courses/Course2/Step10/Resources1';
import Step10Resources2Screen from '@screens/Courses/Course2/Step10/Resources2';
import Step10SurveyScreen from '@screens/Courses/Course2/Step10/Survey';
import Step10ReflectionScreen from '@screens/Courses/Course2/Step10/Reflection';
import Step1VisualizationScreen from '@screens/Courses/Course2/Step10/Visualization';
import { course2step10prompts } from '@screens/Courses/Course2/Step10/Survey/Survey';
import { Course2Step10Screens } from './Course2Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.step10;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course2Step10Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course2Step10Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course2Step10Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title!, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Activities1}
				component={Step10Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Activities2}
				component={Step10Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Activities3}
				component={Step10Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Resources1}
				component={Step10Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Resources2}
				component={Step10Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Survey}
				component={Step10SurveyScreen}
				options={TitleWithProgressHeader(0, course2step10prompts.length, title!, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Reflection}
				component={Step10ReflectionScreen}
				options={TitleHeader(title!, DailyActivity.NightlyReflection)}
			/>

			<StepStack.Screen
				name={Course2Step10Screens.Visualization}
				component={Step1VisualizationScreen}
				options={EmptyHeader()}
			/>

		</StepStack.Navigator>
	);
};
