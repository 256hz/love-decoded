import React from 'react';
import { Screens } from 'route/enums';
import styles from './Header.styles';
import BackButton from './BackButtonHeader';
import CloseButton from './CloseButtonHeader';
import DrawerButton from './DrawerButtonHeader';
import InfoBubble from './InfoBubbleHeader';
import SimpleTitle from './SimpleTitleHeader';
import Title from './TitleHeader';
import titleStyles from './TitleHeader/TitleHeader.styles';

export const headerStyle = [ styles.defaultHeader, styles.removeBottomBorder ];

export const BackHeader = (navigation: any) => ({
	headerLeft: () => <BackButton navigation={navigation} />,
	headerTitle: () => <></>,
});

export const CloseHeader = (navigation: any, title: string = 'Resources', onClose?: () => void) => ({
	headerLeft: () => <></>,
	headerTitle: () => <SimpleTitle title={title} />,
	headerRight: () => <CloseButton navigation={navigation} onClose={onClose} />,
	headerStyle: [ headerStyle, styles.closeHeader ],
});

export const DrawerHeader = navigation => ({
	gestureEnabled: false,
	headerLeft: () => <DrawerButton navigation={navigation} />,
	headerTitle: () => <></>,
});

export const EmptyHeader = () => ({
	headerShown: false,
});

export const TitleHeader = (title: string, subtitle?: string, navigation?: any, infoBubbleTarget?: Screens) => ({
	headerLeft: () => <Title title={title} subtitle={subtitle} />,
	headerTitle: () => <></>,
	headerRight: () => <InfoBubble navigation={navigation} infoBubbleTarget={infoBubbleTarget} />,
	headerTitleContainerStyle: styles.emptyContainer,
	headerStyle: [ titleStyles.titleHeader, styles.removeBottomBorder ],
});

export const TitleWithProgressHeader = (
	activeProgressDot: number,
	totalProgressDots: number,
	title: string,
	subtitle?: string,
) => ({
	headerLeft: () => (
		<Title
			title={title}
			subtitle={subtitle}
			activeProgressDot={activeProgressDot}
			totalProgressDots={totalProgressDots}
		/>),
	headerTitle: () => <></>,
	headerTitleContainerStyle: styles.emptyContainer,
	headerStyle: [ titleStyles.titleWithProgressHeader, styles.removeBottomBorder ],
});

