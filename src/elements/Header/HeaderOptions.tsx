import React from 'react';
import Header, { HeaderType } from './Header';
import styles from './Header.styles';
import titleStyles, { TITLE_WITH_PROGRESS_HEIGHT } from './Title/Title.styles';

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

export const TitleWithProgressHeader = (
	activeProgressDot: number,
	totalProgressDots: number,
	title?: string,
	subtitle?: string,
) => ({
	headerLeft: () => (
		<Header
			type={HeaderType.TitleWithProgress}
			headerProps={{ title, subtitle, activeProgressDot, totalProgressDots }}
		/>
	),
	headerStyle: [
		titleStyles.titleHeader,
		styles.removeBottomBorder,
		{ height: TITLE_WITH_PROGRESS_HEIGHT },
	],
	headerTitle: () => <></>,
	headerTitleContainerStyle: styles.emptyContainer,
});

