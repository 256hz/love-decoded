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
import IntentionScreen from 'screens/Courses/Course1/Step2/Intention';
import Step2Activities1Screen from '@screens/Courses/Course1/Step2/Activities1';
import Step2Activities2Screen from '@screens/Courses/Course1/Step2/Activities2';
import Step2Activities3Screen from '@screens/Courses/Course1/Step2/Activities3';
import Step2Activities4Screen from '@screens/Courses/Course1/Step2/Activities4';
import Step2Activities5Screen from '@screens/Courses/Course1/Step2/Activities5';
import Step2SurveyScreen from '@screens/Courses/Course1/Step2/Survey';
import Step2ReflectionScreen from '@screens/Courses/Course1/Step2/Reflection';
import CongratulationsScreen from '@screens/Courses/Congratulations';
import { DailyActivity, titles } from 'util/titles';
import { course1step2prompts } from 'screens/Courses/Course1/Step2/Survey/Survey';
import { Course1Step2Screens } from './Course1Screens';

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
			name={Course1Step2Screens.Intention}
			component={IntentionScreen}
			options={TitleHeader(titles.course1.step2, DailyActivity.Intention)}
		/>

		<StepStack.Screen
			name={CourseScreens.GoodJob}
			component={GoodJobScreen}
			options={EmptyHeader()}
		/>

		<StepStack.Screen
			name={Course1Step2Screens.Activities1}
			component={Step2Activities1Screen}
			options={TitleHeader(titles.course1.step2, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step2Screens.Activities2}
			component={Step2Activities2Screen}
			options={TitleHeader(titles.course1.step2, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step2Screens.Activities3}
			component={Step2Activities3Screen}
			options={TitleHeader(titles.course1.step2, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step2Screens.Activities4}
			component={Step2Activities4Screen}
			options={TitleHeader(titles.course1.step2, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step2Screens.Activities5}
			component={Step2Activities5Screen}
			options={TitleHeader(titles.course1.step2, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step2Screens.Survey}
			component={Step2SurveyScreen}
			options={TitleWithProgressHeader(0, course1step2prompts.length, titles.course1.step2, DailyActivity.Survey)}
		/>

		<StepStack.Screen
			name={Course1Step2Screens.Reflection}
			component={Step2ReflectionScreen}
			options={TitleHeader(titles.course1.step2, DailyActivity.NightlyReflection)}
		/>

		<StepStack.Screen
			name={CourseScreens.Congratulations}
			component={CongratulationsScreen}
			options={EmptyHeader()}
		/>

	</StepStack.Navigator>
);
