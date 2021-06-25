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
import IntentionScreen from '@screens/Courses/Course2/Step14/Intention';
import Step14Activities1Screen from '@screens/Courses/Course2/Step14/Activities1';
import Step14Activities2Screen from '@screens/Courses/Course2/Step14/Activities2';
import Step14Activities3Screen from '@screens/Courses/Course2/Step14/Activities3';
import Step14Resources1Screen from '@screens/Courses/Course2/Step14/Resources1';
import Step14Resources2Screen from '@screens/Courses/Course2/Step14/Resources2';
import Step14SurveyScreen from '@screens/Courses/Course2/Step14/Survey';
import Step14ReflectionScreen from '@screens/Courses/Course2/Step14/Reflection';
import Step1VisualizationScreen from '@screens/Courses/Course2/Step14/Visualization';
import { course2step14prompts } from '@screens/Courses/Course2/Step14/Survey/Survey';
import { Course2Step14Screens } from './Course2Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.step14;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course2Step14Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course2Step14Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course2Step14Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title!, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Activities1}
				component={Step14Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Activities2}
				component={Step14Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Activities3}
				component={Step14Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Resources1}
				component={Step14Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Resources2}
				component={Step14Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Survey}
				component={Step14SurveyScreen}
				options={TitleWithProgressHeader(0, course2step14prompts.length, title!, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Reflection}
				component={Step14ReflectionScreen}
				options={TitleHeader(title!, DailyActivity.NightlyReflection)}
			/>

			<StepStack.Screen
				name={Course2Step14Screens.Visualization}
				component={Step1VisualizationScreen}
				options={EmptyHeader()}
			/>

		</StepStack.Navigator>
	);
};
