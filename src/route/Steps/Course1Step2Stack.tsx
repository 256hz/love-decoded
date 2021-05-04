import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CourseCommonScreens } from 'route/enums';
import {
	BackHeader,
	CloseHeader,
	DrawerHeader,
	EmptyHeader,
	headerStyle,
	TitleHeader,
	TitleWithProgressHeader,
} from '@elements/Header/Headers';

import HomeScreen from 'screens/Courses/Tabs/Home';
import DayOverviewScreen from 'screens/Courses/Common/DayOverview';
import GoodJobScreen from 'screens/Courses/Common/GoodJob';
import IntentionScreen from 'screens/Courses/Course1/Step2/Intention';
import Step2Activities1Screen from '@screens/Courses/Course1/Step2/Activities1';
import Step2Activities1BScreen from '@screens/Courses/Course1/Step2/Activities1B';
import Step2Activities2Screen from '@screens/Courses/Course1/Step2/Activities2';
import Step2Activities3Screen from '@screens/Courses/Course1/Step2/Activities3';
import Step2Activities4Screen from '@screens/Courses/Course1/Step2/Activities4';
import Step2Activities5Screen from '@screens/Courses/Course1/Step2/Activities5';
import Step2Resources1Screen from '@screens/Courses/Course1/Step2/Resources1';
import Step2Resources2Screen from '@screens/Courses/Course1/Step2/Resources2';
import Step2SurveyScreen from '@screens/Courses/Course1/Step2/Survey';
import Step2ReflectionScreen from '@screens/Courses/Course1/Step2/Reflection';
import { DailyActivity, titles } from '@util/titles';
import { course1step2prompts } from 'screens/Courses/Course1/Step2/Survey/Survey';
import { Course1Step2Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		titles.course1.step2,
		navigation,
		Course1Step2Screens.Resources1,
	);

	return (
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
				name={Course1Step2Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(titles.course1.step2, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={CourseCommonScreens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Activities1}
				component={Step2Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Activities1B}
				component={Step2Activities1BScreen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Activities2}
				component={Step2Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Activities3}
				component={Step2Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Activities4}
				component={Step2Activities4Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Activities5}
				component={Step2Activities5Screen}
				options={TitleHeader(DailyActivity.Activities, titles.course1.step2)}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Resources1}
				component={Step2Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step2Screens.Resources2}
				component={Step2Resources2Screen}
				options={CloseHeader(navigation)}
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

		</StepStack.Navigator>
	);
};
