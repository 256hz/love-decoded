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
import IntentionScreen from '@screens/Courses/Course2/Step12/Intention';
import Step12Activities1Screen from '@screens/Courses/Course2/Step12/Activities1';
import Step12Activities2Screen from '@screens/Courses/Course2/Step12/Activities2';
import Step12Activities3Screen from '@screens/Courses/Course2/Step12/Activities3';
import Step12Resources1Screen from '@screens/Courses/Course2/Step12/Resources1';
import Step12Resources2Screen from '@screens/Courses/Course2/Step12/Resources2';
import Step12SurveyScreen from '@screens/Courses/Course2/Step12/Survey';
import Step12ReflectionScreen from '@screens/Courses/Course2/Step12/Reflection';
import Step1VisualizationScreen from '@screens/Courses/Course2/Step12/Visualization';
import { course2step12prompts } from '@screens/Courses/Course2/Step12/Survey/Survey';
import { Course2Step12Screens } from './Course2Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.step12;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course2Step12Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course2Step12Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course2Step12Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title!, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Activities1}
				component={Step12Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Activities2}
				component={Step12Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Activities3}
				component={Step12Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Resources1}
				component={Step12Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Resources2}
				component={Step12Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Survey}
				component={Step12SurveyScreen}
				options={TitleWithProgressHeader(0, course2step12prompts.length, title!, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Reflection}
				component={Step12ReflectionScreen}
				options={TitleHeader(title!, DailyActivity.NightlyReflection)}
			/>

			<StepStack.Screen
				name={Course2Step12Screens.Visualization}
				component={Step1VisualizationScreen}
				options={EmptyHeader()}
			/>

		</StepStack.Navigator>
	);
};
