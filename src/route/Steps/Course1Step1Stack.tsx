import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { StepScreens } from 'route/enums';
import {
	EmptyHeader,
	BackHeader,
	DrawerHeader,
	headerStyle,
	TitleHeader,
	TitleWithProgressHeader,
} from '@elements/Header/HeaderOptions';

import HomeScreen from '@screens/Steps/Home';
import DayOverviewScreen from '@screens/Steps/DayOverview';
import GoodJobScreen from '@screens/Steps/GoodJob';
import IntentionScreen from 'screens/Courses/Course1/Step1/Intention';
import Step1Activities1Screen from 'screens/Courses/Course1/Step1/Activities1';
import Step1Activities2Screen from '@screens/Courses/Course1/Step1/Activities2';
import Step1Activities3Screen from '@screens/Courses/Course1/Step1/Activities3';
import Step1SurveyScreen from '@screens/Courses/Course1/Step1/Survey';
import Step1ReflectionScreen from '@screens/Courses/Course1/Step1/Reflection';
import Step1VisualizationScreen from 'screens/Courses/Course1/Step1/Visualization';
import CongratulationsScreen from 'screens/Steps/Congratulations';
import { Course1Step1Screens, CourseScreens } from 'route/enums';


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
			name={Course1Step1Screens.Intention}
			component={IntentionScreen}
			options={TitleHeader('Discovering Your Lovable Qualities', 'Intention')}
		/>

		<StepStack.Screen
			name={CourseScreens.GoodJob}
			component={GoodJobScreen}
			options={EmptyHeader()}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Activities1}
			component={Step1Activities1Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Activities2}
			component={Step1Activities2Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Activities3}
			component={Step1Activities3Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Survey}
			component={Step1SurveyScreen}
			options={TitleWithProgressHeader(0, 5, 'Discovering Your Lovable Qualities', 'Survey')}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Reflection}
			component={Step1ReflectionScreen}
			options={TitleHeader('Discovering Your Lovable Qualities', 'Nightly Reflection')}
		/>

		<StepStack.Screen
			name={Course1Step1Screens.Visualization}
			component={Step1VisualizationScreen}
			options={EmptyHeader()}
		/>

		<StepStack.Screen
			name={CourseScreens.Congratulations}
			component={CongratulationsScreen}
			options={EmptyHeader()}
		/>

	</StepStack.Navigator>
);
