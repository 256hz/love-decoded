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
import IntentionScreen from 'screens/Courses/Course1/Step4/Intention';
import Step4Activities1Screen from '@screens/Courses/Course1/Step4/Activities1';
import Step4Activities2Screen from '@screens/Courses/Course1/Step4/Activities2';
import Step4Activities3Screen from 'screens/Courses/Course1/Step4/Activities4';
import Step4Activities4Screen from '@screens/Courses/Course1/Step4/Activities4';
import Step4SurveyScreen from '@screens/Courses/Course1/Step4/Survey';
import Step4ReflectionScreen from '@screens/Courses/Course1/Step4/Reflection';
import CongratulationsScreen from 'screens/Courses/Common/Congratulations';
import { course1step4prompts } from 'screens/Courses/Course1/Step4/Survey/Survey';
import { Course1Step4Screens } from './Course1Screens';

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
			name={Course1Step4Screens.Intention}
			component={IntentionScreen}
			options={TitleHeader(titles.course1.step4, DailyActivity.Intention)}
		/>

		<StepStack.Screen
			name={CourseCommonScreens.GoodJob}
			component={GoodJobScreen}
			options={EmptyHeader()}
		/>

		<StepStack.Screen
			name={Course1Step4Screens.Activities1}
			component={Step4Activities1Screen}
			options={TitleHeader(titles.course1.step4, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step4Screens.Activities2}
			component={Step4Activities2Screen}
			options={TitleHeader(titles.course1.step4, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step4Screens.Activities3}
			component={Step4Activities3Screen}
			options={TitleHeader(titles.course1.step4, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step4Screens.Activities4}
			component={Step4Activities4Screen}
			options={TitleHeader(titles.course1.step4, DailyActivity.Activities)}
		/>

		<StepStack.Screen
			name={Course1Step4Screens.Survey}
			component={Step4SurveyScreen}
			options={TitleWithProgressHeader(0, course1step4prompts.length, titles.course1.step4, DailyActivity.Survey)}
		/>

		<StepStack.Screen
			name={Course1Step4Screens.Reflection}
			component={Step4ReflectionScreen}
			options={TitleHeader(titles.course1.step4, DailyActivity.NightlyReflection)}
		/>

		<StepStack.Screen
			name={CourseCommonScreens.Congratulations}
			component={CongratulationsScreen}
			options={EmptyHeader()}
		/>

	</StepStack.Navigator>
);
