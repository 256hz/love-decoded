import React from 'react';
import { Screens } from 'route/enums';
import BackButtonHeader from './BackButton';
import CloseButtonHeader from './CloseButton';
import DrawerButtonHeader from './DrawerButton';
import SimpleTitleHeader from './SimpleTitle';
import TitleText from './Title';

export enum HeaderType {
	Back = 'back',
	Close = 'close',
	Drawer = 'drawer',
	SimpleTitle = 'simpleTitle',
	Title = 'title',
	TitleWithProgress = 'titleWithProgress',
}

type Props = CloseProps | SimpleTitleProps | SingleButtonProps | TitleProps | TitleWithProgressProps;

type CloseProps = {
	closeTarget?: Screens;
	headerProps?: never;
	navigation: any;
	type: HeaderType.Close;
};

type SimpleTitleProps = {
	closeTarget?: never;
	headerProps: {
		title: string;
		subtitle?: never;
		activeProgressDot?: never;
		totalProgressDots?: never;
	}
	navigation?: never;
	type: HeaderType.SimpleTitle;
};

type SingleButtonProps = {
	closeTarget?: never;
	headerProps?: never;
	navigation: any;
	type: HeaderType.Back | HeaderType.Drawer;
};

type TitleProps = {
	closeTarget?: never;
	headerProps: {
		title: string;
		subtitle?: string;
		activeProgressDot?: never;
		totalProgressDots?: never;
	};
	navigation?: never;
	type: HeaderType.Title;
};

type TitleWithProgressProps = {
	closeTarget?: never;
	headerProps: {
		title: string;
		subtitle?: string;
		activeProgressDot: number;
		totalProgressDots: number;
	};
	navigation?: never;
	type: HeaderType.TitleWithProgress;
};

export default ({ navigation, type, headerProps, closeTarget }: Props) => {
	switch (type) {
		case HeaderType.Back:
			return <BackButtonHeader navigation={navigation} />;
		case HeaderType.Close:
			return <CloseButtonHeader navigation={navigation} closeTarget={closeTarget} />;
		case HeaderType.Drawer:
			return <DrawerButtonHeader navigation={navigation} />;
		case HeaderType.SimpleTitle:
			return <SimpleTitleHeader title={headerProps?.title} />;
		case HeaderType.Title:
			return <TitleText title={headerProps!.title} subtitle={headerProps!.subtitle} />;
		case HeaderType.TitleWithProgress:
			return <TitleText
				title={headerProps!.title}
				subtitle={headerProps!.subtitle}
				activeProgressDot={headerProps!.activeProgressDot}
				totalProgressDots={headerProps!.totalProgressDots}
			/>;
		default:
			return <></>;
	}
};
