import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CourseCommonScreens } from 'route/enums';
import { DailyActivity, titles } from '@util/titles';
import {
	EmptyHeader,
	BackHeader,
	DrawerHeader,
	headerStyle,
	TitleHeader,
	TitleWithProgressHeader,
} from '@elements/Header/HeaderOptions';

import HomeScreen from '@screens/Courses/Home';
import DayOverviewScreen from 'screens/Courses/Common/DayOverview';
import GoodJobScreen from 'screens/Courses/Common/GoodJob';
import IntentionScreen from 'screens/Courses/Course1/Step1/Intention';
import Step1Activities1Screen from 'screens/Courses/Course1/Step1/Activities1';
import Step1Activities2Screen from '@screens/Courses/Course1/Step1/Activities2';
import Step1Activities3Screen from '@screens/Courses/Course1/Step1/Activities3';
import Step1SurveyScreen from '@screens/Courses/Course1/Step1/Survey';
import Step1ReflectionScreen from '@screens/Courses/Course1/Step1/Reflection';
import Step1VisualizationScreen from 'screens/Courses/Course1/Step1/Visualization';
import CongratulationsScreen from 'screens/Courses/Common/Congratulations';
import { Course1Step1Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => (
	<StepStack.Navigator
		mode="card"
		headerMode="float"
		initialRouteName={CourseCommonScreens.Home}
		screenOptions={{ headerStyle }}
	>
		<StepStack.Screen
			name={CourseCommonScreens.Home}
			component={HomeScreen}
			options={{ ...DrawerHeader(navigation), gestureEnabled: false }}
		/>

		<StepStack.Screen
			name={CourseCommonScreens.DayOverview}
			component={DayOverviewScreen}
			options={BackHeader(navigation)}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Intention}
			component={IntentionScreen}
			options={TitleHeader(titles.course1.step1, DailyActivity.Intention)}
		/>

		<StepStack.Screen
			name={CourseCommonScreens.GoodJob}
			component={GoodJobScreen}
			options={EmptyHeader()}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Activities1}
			component={Step1Activities1Screen}
			options={TitleHeader('List of Lovable Qualities', DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Activities2}
			component={Step1Activities2Screen}
			options={TitleHeader('List of Lovable Qualities', DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Activities3}
			component={Step1Activities3Screen}
			options={TitleHeader('List of Lovable Qualities', DailyActivity.Activities)}
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

		<StepStack.Screen
			name={CourseCommonScreens.Congratulations}
			component={CongratulationsScreen}
			options={EmptyHeader()}
		/>

	</StepStack.Navigator>
);
