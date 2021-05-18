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
import IntentionScreen from '@screens/Courses/Course1/Step7/Intention';
import Step7Activities1Screen from '@screens/Courses/Course1/Step7/Activities1';
import Step7Activities2Screen from '@screens/Courses/Course1/Step7/Activities2';
import Step7Activities3Screen from '@screens/Courses/Course1/Step7/Activities3';
import Step7Activities4Screen from '@screens/Courses/Course1/Step7/Activities4';
import Step7Resources1Screen from '@screens/Courses/Course1/Step7/Resources1';
import Step7Resources2Screen from '@screens/Courses/Course1/Step7/Resources2';
import Step7SurveyScreen from '@screens/Courses/Course1/Step7/Survey';
import Step7ReflectionScreen from '@screens/Courses/Course1/Step7/Reflection';
import { course1step7prompts } from '@screens/Courses/Course1/Step7/Survey/Survey';
import { Course1Step7Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.course1.step7;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course1Step7Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course1Step7Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course1Step7Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Activities1}
				component={Step7Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Activities2}
				component={Step7Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Activities3}
				component={Step7Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Activities4}
				component={Step7Activities4Screen}
				options={TitleHeader(DailyActivity.Activities, title)}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Resources1}
				component={Step7Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Resources2}
				component={Step7Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Survey}
				component={Step7SurveyScreen}
				options={TitleWithProgressHeader(0, course1step7prompts.length, title, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course1Step7Screens.Reflection}
				component={Step7ReflectionScreen}
				options={TitleHeader(title, DailyActivity.NightlyReflection)}
			/>

		</StepStack.Navigator>
	);
};
