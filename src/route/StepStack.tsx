import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Steps/Home';
import { HeaderBackButton, HeaderOpenButton } from '@elements';
import colors from 'elements/globalStyles/color';
import { ViewStyle } from 'react-native';
import { StepScreens } from './enums';

const StepStack = createStackNavigator();

const headerStyle: ViewStyle = {
	height: 100,
	backgroundColor: colors.White,
	shadowColor: 'transparent',
	borderBottomWidth: 0,
	borderBottomColor: 'transparent',
	elevation: 0,
};

const Headers = navigation => ({
	Drawer: {
		headerLeft: () => <HeaderOpenButton navigation={navigation} />,
		headerTitle: () => <></>,
	},
	Back: {
		headerLeft: () => <HeaderBackButton navigation={navigation} />,
		headerTitle: () => <></>,
	},
});

export default ({ navigation }) => (
	<StepStack.Navigator
		mode="card"
		headerMode="screen"
		initialRouteName={StepScreens.Home}
		screenOptions={{ headerStyle }}
	>
		<StepStack.Screen name={StepScreens.Home} component={HomeScreen} options={Headers(navigation).Drawer} />
	</StepStack.Navigator>
);
