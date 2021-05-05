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
import IntentionScreen from '@screens/Courses/Course1/Step1/Intention';
import Step1Activities1Screen from '@screens/Courses/Course1/Step1/Activities1';
import Step1Activities2Screen from '@screens/Courses/Course1/Step1/Activities2';
import Step1Activities3Screen from '@screens/Courses/Course1/Step1/Activities3';
import Step1ResourcesScreen from '@screens/Courses/Course1/Step1/Resources';
import Step1SurveyScreen from '@screens/Courses/Course1/Step1/Survey';
import Step1ReflectionScreen from '@screens/Courses/Course1/Step1/Reflection';
import Step1VisualizationScreen from '@screens/Courses/Course1/Step1/Visualization';
import { Course1Step1Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		'List of Lovable Qualities',
		navigation,
		Course1Step1Screens.Resources,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course1Step1Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course1Step1Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(titles.course1.step1, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Activities1}
				component={Step1Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Activities2}
				component={Step1Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Activities3}
				component={Step1Activities3Screen}
				options={TitleHeader(DailyActivity.Activities, 'List of Lovable Qualities')}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Resources}
				component={Step1ResourcesScreen}
				options={CloseHeader(navigation, 'Resources')}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Survey}
				component={Step1SurveyScreen}
				options={TitleWithProgressHeader(0, 5, titles.course1.step1, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Reflection}
				component={Step1ReflectionScreen}
				options={TitleHeader(titles.course1.step1, DailyActivity.NightlyReflection)}
			/>

			<StepStack.Screen
				name={Course1Step1Screens.Visualization}
				component={Step1VisualizationScreen}
				options={EmptyHeader()}
			/>

		</StepStack.Navigator>
	);
};
