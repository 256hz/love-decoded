import React from 'react';
import BackButton from './BackButton';
import DrawerButton from './DrawerButton';
import TitleText from './Title';

export enum HeaderType {
	Back = 'back',
	Drawer = 'drawer',
	Title = 'title',
	TitleWithProgress = 'titleWithProgress',
}

type Props = SingleButtonProps | TitleProps | TitleWithProgressProps;

type SingleButtonProps = {
	headerProps?: never;
	navigation: any;
	type: HeaderType.Back | HeaderType.Drawer;
};

type TitleProps = {
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
	headerProps: {
		title: string;
		subtitle?: string;
		activeProgressDot: number;
		totalProgressDots: number;
	};
	navigation?: never;
	type: HeaderType.TitleWithProgress;
};

export default ({ navigation, type, headerProps }: Props) => {
	switch (type) {
		case HeaderType.Back:
			return <BackButton navigation={navigation} />;
		case HeaderType.Drawer:
			return <DrawerButton navigation={navigation} />;
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
