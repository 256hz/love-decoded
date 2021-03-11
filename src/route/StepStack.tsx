import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StepScreens } from 'route/enums';
import {
	EmptyHeader,
	BackHeader,
	DrawerHeader,
	headerStyle,
	TitleHeader,
} from '@elements/Header/HeaderOptions';

import HomeScreen from '@screens/Steps/Home';
import DayOverviewScreen from '@screens/Steps/DayOverview';
import IntentionScreen from 'screens/Steps/Step1/Intention';
import GoodJobScreen from '@screens/Steps/GoodJob';
import Step1Activities1Screen from 'screens/Steps/Step1/Activities1';
import Step1Activities2Screen from '@screens/Steps/Step1/Activities2';
import Step1Activities3Screen from '@screens/Steps/Step1/Activities3';

const StepStack = createStackNavigator();

export default ({ navigation }) => (
	<StepStack.Navigator
		mode="card"
		headerMode="float"
		initialRouteName={StepScreens.Step1Activities1}
		screenOptions={{ headerStyle }}
	>
		<StepStack.Screen name={StepScreens.Home} component={HomeScreen} options={DrawerHeader(navigation)} />
		<StepStack.Screen name={StepScreens.DayOverview} component={DayOverviewScreen} options={BackHeader(navigation)} />
		<StepStack.Screen name={StepScreens.Step1Intention} component={IntentionScreen}
			options={TitleHeader('Discovering Your Lovable Qualities', 'Intention')} />
		<StepStack.Screen name={StepScreens.GoodJob} component={GoodJobScreen} options={EmptyHeader()} />
		<StepStack.Screen name={StepScreens.Step1Activities1} component={Step1Activities1Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')} />
		<StepStack.Screen name={StepScreens.Step1Activities2} component={Step1Activities2Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')} />
		<StepStack.Screen name={StepScreens.Step1Activities3} component={Step1Activities3Screen}
			options={TitleHeader('List of Lovable Qualities', 'Activities')} />
	</StepStack.Navigator>
);
