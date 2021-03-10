import React, { ReactChild } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StepScreens } from 'route/enums';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import styles from './StepScreen.styles';

type Props = {
	children: ReactChild;
	containerStyle?: ViewStyle;
	audioFilename?: string;
	backTarget?: StepScreens;
	hideBackButton?: boolean;
	hideHeader?: boolean;
	hideNextButton?: boolean;
	onAudioEnd?: () => void;
	onPressNext?: () => void;
	nextEnabled?: boolean;
	nextTarget?: StepScreens;
	scrollDisabled?: boolean;
	title?: string;
	subtitle?: string;
};

export default ({
	audioFilename,
	children,
	containerStyle = {},
	scrollDisabled = false,
	backTarget,
	hideBackButton,
	hideHeader,
	hideNextButton,
	onAudioEnd,
	onPressNext,
	nextEnabled,
	nextTarget,
	title,
	subtitle,
}: Props) => {
	console.log(containerStyle);
	return (
		<View
			style={[ styles.container, containerStyle ]}
		>
			{ title && (
				// create titleRightElement for infoBubble
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>{title}</Text>
					{ subtitle && (
						<Text style={styles.subtitleText}>{subtitle}</Text>
					)}
				</View>
			)}

			<ScrollWrapper scrollDisabled={scrollDisabled}>
				{children}
			</ScrollWrapper>

			{ nextTarget && (
				<AudioPlayerNavigator
					audioFilename={audioFilename}
					backTarget={backTarget}
					hideBackButton={hideBackButton}
					hideNextButton={hideNextButton}
					onAudioEnd={onAudioEnd}
					onPressNext={onPressNext}
					nextEnabled={nextEnabled}
					nextTarget={nextTarget}
				/>
			)}
		</View>
	);
};

const ScrollWrapper = ({ scrollDisabled, children }: { scrollDisabled: boolean, children: ReactChild }) => (
	scrollDisabled
		? <View style={styles.childrenContainer}>{children}</View>
		: <ScrollView contentContainerStyle={styles.childrenContainer}>{children}</ScrollView>
);
