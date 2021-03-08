/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideDrawer } from '@elements/SideDrawer';
import HomeTabs, { TabNames } from './HomeTabs';

type DrawerParamList = {
	[TabNames.HomeScreen]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default () => {
	return (
		<Drawer.Navigator
			drawerStyle={{ width: 281 }}
			drawerContent={props => <SideDrawer {...props} />}
		>
			<Drawer.Screen name={TabNames.HomeScreen} component={HomeTabs} options={{ headerShown: false }} />
		</Drawer.Navigator>
	);
};
