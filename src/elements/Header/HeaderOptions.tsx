import React from 'react';
import { Dimensions, ViewStyle } from 'react-native';
import colors from '@elements/globalStyles/color';
import Header, { HeaderType } from './Header';

export const headerStyle: ViewStyle = {
	backgroundColor: colors.GrayFB,
	shadowColor: 'transparent',
	borderBottomWidth: 0,
	borderBottomColor: 'transparent',
	elevation: 0,
	height: 100,
};

export const BackHeader = navigation => ({
	headerLeft: () => <Header type={HeaderType.Back} navigation={navigation} />,
});

export const DrawerHeader = navigation => ({
	headerLeft: () => <Header type={HeaderType.Drawer} navigation={navigation} />,
});

export const EmptyHeader = () => ({
	headerShown: false,
});

export const TitleHeader = (title?: string, subtitle?: string) => ({
	headerLeft: () => <></>,
	headerStyle: { height: 150 },
	headerTitle: () => <Header type={HeaderType.Title} headerProps={{ title, subtitle }} />,
	headerTitleContainerStyle: { width: '100%' },
});
