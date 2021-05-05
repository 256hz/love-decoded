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
import IntentionScreen from '@screens/Courses/Course1/Step4/Intention';
import Step4Activities1Screen from '@screens/Courses/Course1/Step4/Activities1';
import Step4Activities2Screen from '@screens/Courses/Course1/Step4/Activities2';
import Step4Activities3Screen from '@screens/Courses/Course1/Step4/Activities4';
import Step4Activities4Screen from '@screens/Courses/Course1/Step4/Activities4';
import Step4Resources1Screen from '@screens/Courses/Course1/Step4/Resources1';
import Step4Resources2Screen from '@screens/Courses/Course1/Step4/Resources2';
import Step4Resources3Screen from '@screens/Courses/Course1/Step4/Resources3';
import Step4SurveyScreen from '@screens/Courses/Course1/Step4/Survey';
import Step4ReflectionScreen from '@screens/Courses/Course1/Step4/Reflection';
import { course1step4prompts } from '@screens/Courses/Course1/Step4/Survey/Survey';
import { Course1Step4Screens } from './Course1Screens';

const StepStack = createStackNavigator();

export default ({ navigation }) => {
	const ActivitiesHeader = () => TitleHeader(
		DailyActivity.Activities,
		titles.course1.step4,
		navigation,
		Course1Step4Screens.Resources1,
	);

	return (
		<StepStack.Navigator
			mode="card"
			headerMode="float"
			initialRouteName={Course1Step4Screens.Home}
			screenOptions={{ headerStyle }}
		>
			<StepStack.Screen
				name={Course1Step4Screens.Home}
				component={HomeScreen}
				options={DrawerHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.DayOverview}
				component={DayOverviewScreen}
				options={BackHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Intention}
				component={IntentionScreen}
				options={TitleHeader(titles.course1.step4, DailyActivity.Intention)}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.GoodJob}
				component={GoodJobScreen}
				options={EmptyHeader()}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Activities1}
				component={Step4Activities1Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Activities2}
				component={Step4Activities2Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Activities3}
				component={Step4Activities3Screen}
				options={ActivitiesHeader()}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Activities4}
				component={Step4Activities4Screen}
				options={TitleHeader(DailyActivity.Activities, titles.course1.step4)}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Resources1}
				component={Step4Resources1Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Resources2}
				component={Step4Resources2Screen}
				options={CloseHeader(navigation)}
			/>

			<StepStack.Screen
				name={Course1Step4Screens.Resources3}
				component={Step4Resources3Screen}
				options={CloseHeader(navigation)}
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

		</StepStack.Navigator>
	);
};
