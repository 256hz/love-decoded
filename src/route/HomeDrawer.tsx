/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { SideDrawer } from 'elements';
import HomeTabs, { TabNames } from './HomeTabs';

const Drawer = createDrawerNavigator();

enum DrawerScreens {
	DrawerScreen = 'Drawer',
}

export default () => {
	return (
		<Drawer.Navigator
			drawerStyle={{ width: 281 }}
			drawerContent={(props) => <SideDrawer {...props} />}
		>
			<Drawer.Screen name={TabNames.HomeScreen} component={HomeTabs} options={{ headerShown: false }} />
		</Drawer.Navigator>
	);
};
