import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton, HeaderOpenButton } from '@elements';
import colors from 'elements/globalStyles/color';
import { ViewStyle } from 'react-native';

import HomeScreen from '@screens/Steps/Home';
import DayOverviewScreen from '@screens/Steps/DayOverview';
import IntentionScreen from 'screens/Steps/Step1/Intention';
import GoodJobScreen from '@screens/Steps/GoodJob';
import Step1Activities1Screen from 'screens/Steps/Step1/Activities1';
import Step1Activities2Screen from '@screens/Steps/Step1/Activities2';
import { StepScreens } from './enums';

const StepStack = createStackNavigator();

const headerStyle: ViewStyle = {
	height: 100,
	backgroundColor: colors.GrayF3,
	shadowColor: 'transparent',
	borderBottomWidth: 0,
	borderBottomColor: 'transparent',
	elevation: 0,
};

const Headers = navigation => ({
	Back: {
		headerLeft: () => <HeaderBackButton navigation={navigation} />,
		headerTitle: () => <></>,
	},
	Drawer: {
		headerLeft: () => <HeaderOpenButton navigation={navigation} />,
		headerTitle: () => <></>,
	},
	Empty: {
		headerLeft:  () => <></>,
		headerTitle: () => <></>,
	},
	None: {
		headerTitle: () => <></>,
		headerLeft:  () => <></>,
	},
});

export default ({ navigation }) => (
	<StepStack.Navigator
		mode="card"
		headerMode="screen"
		initialRouteName={StepScreens.Step1Activities1}
		screenOptions={{ headerStyle }}
	>
		<StepStack.Screen name={StepScreens.Home} component={HomeScreen} options={Headers(navigation).Drawer} />
		<StepStack.Screen name={StepScreens.DayOverview} component={DayOverviewScreen} options={Headers(navigation).Back} />
		<StepStack.Screen name={StepScreens.Step1Intention} component={IntentionScreen} options={Headers(navigation).Empty} />
		<StepStack.Screen name={StepScreens.GoodJob} component={GoodJobScreen} options={Headers(navigation).Empty} />
		<StepStack.Screen name={StepScreens.Step1Activities1} component={Step1Activities1Screen} options={Headers(navigation).Empty} />
		<StepStack.Screen name={StepScreens.Step1Activities2} component={Step1Activities2Screen} options={Headers(navigation).Empty} />
	</StepStack.Navigator>
);
