import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton, HeaderOpenButton } from '@elements';
import colors from 'elements/globalStyles/color';
import { ViewStyle } from 'react-native';

import HomeScreen from '@screens/Steps/Home';
import DayOverviewScreen from '@screens/Steps/DayOverview';
import IntentionScreen from '@screens/Steps/Intention';
import GoodJobScreen from '@screens/Steps/GoodJob';
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
		headerStyle: { height: 0 },
	},
});

export default ({ navigation }) => (
	<StepStack.Navigator
		mode="card"
		headerMode="screen"
		initialRouteName={StepScreens.Intention}
		screenOptions={{ headerStyle }}
	>
		<StepStack.Screen name={StepScreens.Home} component={HomeScreen} options={Headers(navigation).Drawer} />
		<StepStack.Screen name={StepScreens.DayOverview} component={DayOverviewScreen} options={Headers(navigation).Back} />
		<StepStack.Screen name={StepScreens.Intention} component={IntentionScreen} options={Headers(navigation).Empty} />
		<StepStack.Screen name={StepScreens.GoodJob} component={GoodJobScreen} options={Headers(navigation).Empty} />
	</StepStack.Navigator>
);
