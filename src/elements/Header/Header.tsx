import React, { ReactChild } from 'react';
import { View } from 'react-native';
import BackButton from './BackButton';
import DrawerButton from './DrawerButton';
import styles from './Header.styles';
import TitleText from './Title';

export enum HeaderType {
	Back = 'back',
	Drawer = 'drawer',
	Title = 'title',
}

type Props = {
	headerProps: {
		title?: string;
		subtitle?: string;
	};
	navigation?: never;
	type: HeaderType.Title;
} | {
	headerProps?: never;
	navigation: any;
	type: HeaderType.Back;
} | {
	headerProps?: never;
	navigation: any;
	type: HeaderType.Drawer;
};

export default ({ navigation, type, headerProps }: Props) => {
	switch (type) {
		case HeaderType.Back:
			return <BackButton navigation={navigation} />;
		case HeaderType.Drawer:
			return <DrawerButton navigation={navigation} />;
		case HeaderType.Title:
			return <TitleText title={headerProps?.title} subtitle={headerProps?.subtitle} />;
		default:
			return <></>;
	}
};
