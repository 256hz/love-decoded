import React from 'react';
import Header, { HeaderType } from './Header';
import styles from './Header.styles';
import titleStyles from './Title/Title.styles';

export const headerStyle = [ styles.defaultHeader, styles.removeBottomBorder ];

export const BackHeader = navigation => ({
	headerLeft: () => <Header type={HeaderType.Back} navigation={navigation} />,
	headerTitle: () => <></>,
});

export const DrawerHeader = navigation => ({
	headerLeft: () => <Header type={HeaderType.Drawer} navigation={navigation} />,
	headerTitle: () => <></>,
});

export const EmptyHeader = () => ({
	headerShown: false,
});

export const TitleHeader = (title?: string, subtitle?: string) => ({
	headerLeft: () => <Header type={HeaderType.Title} headerProps={{ title, subtitle }} />,
	headerStyle: [ titleStyles.titleHeader, styles.removeBottomBorder ],
	headerTitle: () => <></>,
	headerTitleContainerStyle: styles.emptyContainer,
});
