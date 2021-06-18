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
import IntentionScreen from '@screens/Courses/Course2/Step9/Intention';
import Step9Activities1Screen from '@screens/Courses/Course2/Step9/Activities1';
import Step9Activities2Screen from '@screens/Courses/Course2/Step9/Activities2';
import Step9Activities3Screen from '@screens/Courses/Course2/Step9/Activities3';
import Step9Resources1Screen from '@screens/Courses/Course2/Step9/Resources1';
import Step9Resources2Screen from '@screens/Courses/Course2/Step9/Resources2';
import Step9SurveyScreen from '@screens/Courses/Course2/Step9/Survey';
import Step9ReflectionScreen from '@screens/Courses/Course2/Step9/Reflection';
import Step1VisualizationScreen from '@screens/Courses/Course2/Step9/Visualization';
import { course2step9prompts } from '@screens/Courses/Course2/Step9/Survey/Survey';
import { Course2Step9Screens } from './Course2Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.step9;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course2Step9Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course2Step9Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course2Step9Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title!, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Activities1}
				component={Step9Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Activities2}
				component={Step9Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Activities3}
				component={Step9Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Resources1}
				component={Step9Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Resources2}
				component={Step9Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Survey}
				component={Step9SurveyScreen}
				options={TitleWithProgressHeader(0, course2step9prompts.length, title!, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Reflection}
				component={Step9ReflectionScreen}
				options={TitleHeader(title!, DailyActivity.NightlyReflection)}
			/>

			<StepStack.Screen
				name={Course2Step9Screens.Visualization}
				component={Step1VisualizationScreen}
				options={EmptyHeader()}
			/>

		</StepStack.Navigator>
	);
};
