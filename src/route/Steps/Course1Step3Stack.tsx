import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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
import IntentionScreen from '@screens/Courses/Course1/Step3/Intention';
import Step3Activities1Screen from '@screens/Courses/Course1/Step3/Activities1';
import Step3Activities2Screen from '@screens/Courses/Course1/Step3/Activities2';
import Step3Activities3Screen from '@screens/Courses/Course1/Step3/Activities3';
import Step3ResourcesScreen from '@screens/Courses/Course1/Step3/Resources';
import Step3SurveyScreen from '@screens/Courses/Course1/Step3/Survey';
import Step3ReflectionScreen from '@screens/Courses/Course1/Step3/Reflection';
import { DailyActivity, titles } from '@util/titles';
import { course1step3prompts } from '@screens/Courses/Course1/Step3/Survey/Survey';
import { Course1Step3Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		titles.course1.step3,
		navigation,
		Course1Step3Screens.Resources,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course1Step3Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course1Step3Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step3Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step3Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(titles.course1.step3, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course1Step3Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course1Step3Screens.Activities1}
				component={Step3Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step3Screens.Activities2}
				component={Step3Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step3Screens.Activities3}
				component={Step3Activities3Screen}
				options={TitleHeader(DailyActivity.Activities, titles.course1.step3)}
			/>

			<StepStack.Screen
				name={Course1Step3Screens.Resources}
				component={Step3ResourcesScreen}
				options={CloseHeader(navigation)}
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

		</StepStack.Navigator>
	);
};
