import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CourseScreens } from 'route/enums';
import {
	EmptyHeader,
	BackHeader,
	DrawerHeader,
	headerStyle,
	TitleHeader,
	TitleWithProgressHeader,
} from '@elements/Header/HeaderOptions';

import HomeScreen from '@screens/Courses/Home';
import DayOverviewScreen from '@screens/Courses/DayOverview';
import GoodJobScreen from '@screens/Courses/GoodJob';
import IntentionScreen from 'screens/Courses/Course1/Step3/Intention';
import Step3Activities1Screen from '@screens/Courses/Course1/Step3/Activities1';
import Step3Activities2Screen from '@screens/Courses/Course1/Step3/Activities2';
import Step3Activities3Screen from '@screens/Courses/Course1/Step3/Activities3';
import Step3SurveyScreen from '@screens/Courses/Course1/Step3/Survey';
import Step3ReflectionScreen from '@screens/Courses/Course1/Step3/Reflection';
import CongratulationsScreen from '@screens/Courses/Congratulations';
import { DailyActivity, titles } from 'util/titles';
import { course1step3prompts } from 'screens/Courses/Course1/Step3/Survey/Survey';
import { Course1Step3Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => (
	<StepStack.Navigator
		mode="card"
		headerMode="float"
		initialRouteName={CourseScreens.Home}
		screenOptions={{ headerStyle }}
	>
		<StepStack.Screen
			name={CourseScreens.Home}
			component={HomeScreen}
			options={{ ...DrawerHeader(navigation), gestureEnabled: false }}
		/>

		<StepStack.Screen
			name={CourseScreens.DayOverview}
			component={DayOverviewScreen}
			options={BackHeader(navigation)}
		/>

		<StepStack.Screen
			name={Course1Step3Screens.Intention}
			component={IntentionScreen}
			options={TitleHeader(titles.course1.step3, DailyActivity.Intention)}
		/>

		<StepStack.Screen
			name={CourseScreens.GoodJob}
			component={GoodJobScreen}
			options={EmptyHeader()}
		/>

		<StepStack.Screen
			name={Course1Step3Screens.Activities1}
			component={Step3Activities1Screen}
			options={TitleHeader(titles.course1.step3, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step3Screens.Activities2}
			component={Step3Activities2Screen}
			options={TitleHeader(titles.course1.step3, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step3Screens.Activities3}
			component={Step3Activities3Screen}
			options={TitleHeader(titles.course1.step3, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step3Screens.Survey}
			component={Step3SurveyScreen}
			options={TitleWithProgressHeader(0, course1step3prompts.length, titles.course1.step3, DailyActivity.Survey)}
		/>

		<StepStack.Screen
			name={Course1Step3Screens.Reflection}
			component={Step3ReflectionScreen}
			options={TitleHeader(titles.course1.step3, DailyActivity.NightlyReflection)}
		/>

		<StepStack.Screen
			name={CourseScreens.Congratulations}
			component={CongratulationsScreen}
			options={EmptyHeader()}
		/>

	</StepStack.Navigator>
);
