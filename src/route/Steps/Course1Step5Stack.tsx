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
import IntentionScreen from '@screens/Courses/Course1/Step5/Intention';
import Step5Activities1Screen from '@screens/Courses/Course1/Step5/Activities1';
import Step5Activities2Screen from '@screens/Courses/Course1/Step5/Activities2';
import Step5Activities3Screen from '@screens/Courses/Course1/Step5/Activities3';
import Step5Activities4aScreen from '@screens/Courses/Course1/Step5/Activities4a';
import Step5Activities4bScreen from '@screens/Courses/Course1/Step5/Activities4b';
import Step5Activities5Screen from '@screens/Courses/Course1/Step5/Activities5';
import Step5Activities6Screen from '@screens/Courses/Course1/Step5/Activities6';
import Step5Activities7Screen from '@screens/Courses/Course1/Step5/Activities7';
import Step5Activities8Screen from '@screens/Courses/Course1/Step5/Activities8';
import Step5Resources1Screen from '@screens/Courses/Course1/Step5/Resources1';
import Step5Resources2Screen from '@screens/Courses/Course1/Step5/Resources2';
import Step5SurveyScreen from '@screens/Courses/Course1/Step5/Survey';
import Step5ReflectionScreen from '@screens/Courses/Course1/Step5/Reflection';
import { course1step5prompts } from '@screens/Courses/Course1/Step5/Survey/Survey';
import { Course1Step5Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const title = titles.course1.step5;

	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		title,
		navigation,
		Course1Step5Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course1Step5Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course1Step5Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(title, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities1}
				component={Step5Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities2}
				component={Step5Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities3}
				component={Step5Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities4a}
				component={Step5Activities4aScreen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities4b}
				component={Step5Activities4bScreen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities5}
				component={Step5Activities5Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities6}
				component={Step5Activities6Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities7}
				component={Step5Activities7Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Activities8}
				component={Step5Activities8Screen}
				options={TitleHeader(DailyActivity.Activities, title)}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Resources1}
				component={Step5Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Resources2}
				component={Step5Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Survey}
				component={Step5SurveyScreen}
				options={TitleWithProgressHeader(0, course1step5prompts.length, title, DailyActivity.Survey)}
			/>

			<StepStack.Screen
				name={Course1Step5Screens.Reflection}
				component={Step5ReflectionScreen}
				options={TitleHeader(title, DailyActivity.NightlyReflection)}
			/>

		</StepStack.Navigator>
	);
};
