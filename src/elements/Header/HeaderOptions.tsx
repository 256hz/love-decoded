import React from 'react';
import { Screens } from 'route/enums';
import Header, { HeaderType } from './Header';
import styles from './Header.styles';
import titleStyles from './Title/Title.styles';

export const headerStyle = [ styles.defaultHeader, styles.removeBottomBorder ];

export const BackHeader = navigation => ({
	headerLeft: () => <Header type={HeaderType.Back} navigation={navigation} />,
	headerTitle: () => <></>,
});

export const CloseHeader = (navigation: any, title: string = 'Resources', closeTarget?: Screens) => ({
	headerLeft: () => <></>,
	headerTitle: () => <Header type={HeaderType.SimpleTitle} headerProps={{ title }} />,
	headerRight: () => <Header type={HeaderType.Close} navigation={navigation} closeTarget={closeTarget} />,
	headerStyle: [ headerStyle, styles.closeHeader ],
});

export const DrawerHeader = navigation => ({
	headerLeft: () => <Header type={HeaderType.Drawer} navigation={navigation} />,
	headerTitle: () => <></>,
});

export const EmptyHeader = () => ({
	headerShown: false,
});

export const TitleHeader = (title: string, subtitle?: string) => ({
	headerLeft: () => <Header type={HeaderType.Title} headerProps={{ title, subtitle }} />,
	headerStyle: [ titleStyles.titleHeader, styles.removeBottomBorder ],
	headerTitle: () => <></>,
	headerTitleContainerStyle: styles.emptyContainer,
	headerRight: () => <></>,
	headerRightContainerStyle: styles.emptyContainer,
});

export const TitleWithProgressHeader = (
	activeProgressDot: number,
	totalProgressDots: number,
	title: string,
	subtitle?: string,
) => ({
	headerLeft: () => (
		<Header
			type={HeaderType.TitleWithProgress}
			headerProps={{ title, subtitle, activeProgressDot, totalProgressDots }}
		/>
	),
	headerStyle: [ titleStyles.titleWithProgressHeader, styles.removeBottomBorder ],
	headerTitle: () => <></>,
	headerTitleContainerStyle: styles.emptyContainer,
});

