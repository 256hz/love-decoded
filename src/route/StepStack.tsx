import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Steps/Home';

const StepStack = createStackNavigator();

export enum StepScreens {
	Home = 'Home',
}

export default () => (
	<StepStack.Navigator mode="card" headerMode="none" initialRouteName={StepScreens.Home}>
		<StepStack.Screen name={StepScreens.Home} component={HomeScreen} />
	</StepStack.Navigator>
);
