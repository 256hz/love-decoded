import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StepScreens } from 'route/enums';
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
import IntentionScreen from 'screens/Steps/Step1/Intention';
import GoodJobScreen from '@screens/Steps/GoodJob';
import Step1Activities1Screen from 'screens/Steps/Step1/Activities1';
import Step1Activities2Screen from '@screens/Steps/Step1/Activities2';
import Step1Activities3Screen from '@screens/Steps/Step1/Activities3';
import Step1SurveyScreen from '@screens/Steps/Step1/Survey';
import Step1ReflectionScreen from '@screens/Steps/Step1/Reflection';
import Step1VisualizationScreen from 'screens/Steps/Step1/Visualization';
import CongratulationsScreen from 'screens/Steps/Congratulations';


const StepStack = createStackNavigator();

export default ({ navigation }) => (
	<StepStack.Navigator
		mode="card"
		headerMode="float"
		initialRouteName={StepScreens.Home}
		screenOptions={{ headerStyle }}
	>
		<StepStack.Screen name={StepScreens.Home} component={HomeScreen}
			options={{ ...DrawerHeader(navigation), gestureEnabled: false }} />
		<StepStack.Screen name={StepScreens.DayOverview} component={DayOverviewScreen}
			options={BackHeader(navigation)} />
		<StepStack.Screen name={StepScreens.Step1Intention} component={IntentionScreen}
			options={TitleHeader('Discovering Your Lovable Qualities', 'Intention')} />
		<StepStack.Screen name={StepScreens.GoodJob} component={GoodJobScreen}
			options={EmptyHeader()} />
		<StepStack.Screen name={StepScreens.Step1Activities1} component={Step1Activities1Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')} />
		<StepStack.Screen name={StepScreens.Step1Activities2} component={Step1Activities2Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')} />
		<StepStack.Screen name={StepScreens.Step1Activities3} component={Step1Activities3Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')} />
		<StepStack.Screen name={StepScreens.Step1Survey} component={Step1SurveyScreen}
			options={TitleWithProgressHeader(0, 5, 'Discovering Your Lovable Qualities', 'Survey')} />
		<StepStack.Screen name={StepScreens.Step1Reflection} component={Step1ReflectionScreen}
			options={TitleHeader('Discovering Your Lovable Qualities', 'Nightly Reflection')} />
		<StepStack.Screen name={StepScreens.Step1Visualization} component={Step1VisualizationScreen}
			options={EmptyHeader()} />
		<StepStack.Screen name={StepScreens.Congratulations} component={CongratulationsScreen}
			options={EmptyHeader()} />
	</StepStack.Navigator>
);
