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
import IntentionScreen from '@screens/Courses/Course1/Step6/Intention';
import Step6Activities1Screen from '@screens/Courses/Course1/Step6/Activities1';
import Step6Activities2Screen from '@screens/Courses/Course1/Step6/Activities2';
import Step6Activities3Screen from '@screens/Courses/Course1/Step6/Activities3';
import Step6Resources1Screen from '@screens/Courses/Course1/Step6/Resources1';
import Step6Resources2Screen from '@screens/Courses/Course1/Step6/Resources2';
import Step6SurveyScreen from '@screens/Courses/Course1/Step6/Survey';
import Step6ReflectionScreen from '@screens/Courses/Course1/Step6/Reflection';
import { course1step6prompts } from '@screens/Courses/Course1/Step6/Survey/Survey';
import { Course1Step6Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.course1.step6;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course1Step6Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course1Step6Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course1Step6Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Activities1}
				component={Step6Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Activities2}
				component={Step6Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Activities3}
				component={Step6Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Resources1}
				component={Step6Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Resources2}
				component={Step6Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Survey}
				component={Step6SurveyScreen}
				options={TitleWithProgressHeader(0, course1step6prompts.length, title, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course1Step6Screens.Reflection}
				component={Step6ReflectionScreen}
				options={TitleHeader(title, DailyActivity.NightlyReflection)}
			/>

		</StepStack.Navigator>
	);
};
