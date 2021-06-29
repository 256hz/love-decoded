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
import IntentionScreen from '@screens/Courses/Course2/Step13/Intention';
import Step13Activities1Screen from '@screens/Courses/Course2/Step13/Activities1';
import Step13Activities2Screen from '@screens/Courses/Course2/Step13/Activities2';
import Step13Activities3Screen from '@screens/Courses/Course2/Step13/Activities3';
import Step13Activities4Screen from '@screens/Courses/Course2/Step13/Activities4';
import Step13Resources1Screen from '@screens/Courses/Course2/Step13/Resources1';
import Step13Resources2Screen from '@screens/Courses/Course2/Step13/Resources2';
import Step13SurveyScreen from '@screens/Courses/Course2/Step13/Survey';
import Step13ReflectionScreen from '@screens/Courses/Course2/Step13/Reflection';
import Step1VisualizationScreen from '@screens/Courses/Course2/Step13/Visualization';
import { course2step13prompts } from '@screens/Courses/Course2/Step13/Survey/Survey';
import { Course2Step13Screens } from './Course2Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.step13;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course2Step13Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course2Step13Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course2Step13Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title!, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Activities1}
				component={Step13Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Activities2}
				component={Step13Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Activities3}
				component={Step13Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Activities4}
				component={Step13Activities4Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Resources1}
				component={Step13Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Resources2}
				component={Step13Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Survey}
				component={Step13SurveyScreen}
				options={TitleWithProgressHeader(0, course2step13prompts.length, title!, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Reflection}
				component={Step13ReflectionScreen}
				options={TitleHeader(title!, DailyActivity.NightlyReflection)}
			/>

			<StepStack.Screen
				name={Course2Step13Screens.Visualization}
				component={Step1VisualizationScreen}
				options={EmptyHeader()}
			/>

		</StepStack.Navigator>
	);
};
