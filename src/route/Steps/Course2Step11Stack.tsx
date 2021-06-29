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
import IntentionScreen from '@screens/Courses/Course2/Step11/Intention';
import Step11Activities1Screen from '@screens/Courses/Course2/Step11/Activities1';
import Step11Activities2Screen from '@screens/Courses/Course2/Step11/Activities2';
import Step11Activities3Screen from '@screens/Courses/Course2/Step11/Activities3';
import Step11Activities4Screen from '@screens/Courses/Course2/Step11/Activities4';
import Step11Resources1Screen from '@screens/Courses/Course2/Step11/Resources1';
import Step11Resources2Screen from '@screens/Courses/Course2/Step11/Resources2';
import Step11SurveyScreen from '@screens/Courses/Course2/Step11/Survey';
import Step11ReflectionScreen from '@screens/Courses/Course2/Step11/Reflection';
import Step1VisualizationScreen from '@screens/Courses/Course2/Step11/Visualization';
import { course2step11prompts } from '@screens/Courses/Course2/Step11/Survey/Survey';
import { Course2Step11Screens } from './Course2Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.step11;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course2Step11Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course2Step11Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course2Step11Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title!, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Activities1}
				component={Step11Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Activities2}
				component={Step11Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Activities3}
				component={Step11Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Activities4}
				component={Step11Activities4Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Resources1}
				component={Step11Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Resources2}
				component={Step11Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Survey}
				component={Step11SurveyScreen}
				options={TitleWithProgressHeader(0, course2step11prompts.length, title!, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Reflection}
				component={Step11ReflectionScreen}
				options={TitleHeader(title!, DailyActivity.NightlyReflection)}
			/>

			<StepStack.Screen
				name={Course2Step11Screens.Visualization}
				component={Step1VisualizationScreen}
				options={EmptyHeader()}
			/>

		</StepStack.Navigator>
	);
};
