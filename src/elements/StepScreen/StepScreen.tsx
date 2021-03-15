import React, { ReactChild } from 'react';
import { View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StepScreens } from 'route/enums';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import styles from './StepScreen.styles';

type Props = {
	audioFilename?: string;
	backTarget?: StepScreens;
	children: ReactChild;
	containerStyle?: ViewStyle;
	customMiddleContent?: ReactChild;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	onAudioEnd?: () => void;
	onPressNext?: () => void;
	nextEnabled?: boolean;
	nextTarget?: StepScreens;
	scrollDisabled?: boolean;
};

export default ({
	audioFilename,
	children,
	containerStyle = {},
	customMiddleContent,
	scrollDisabled = false,
	backTarget,
	hideBackButton,
	hideNextButton,
	onAudioEnd,
	onPressNext,
	nextEnabled,
	nextTarget,
}: Props) => {
	return (
		<View style={[ styles.container, containerStyle ]}>

			<ScrollWrapper scrollDisabled={scrollDisabled}>
				{children}
			</ScrollWrapper>

			{ nextTarget
				? (
					<AudioPlayerNavigator
						audioFilename={audioFilename}
						backTarget={backTarget}
						customMiddleContent={customMiddleContent}
						hideBackButton={hideBackButton}
						hideNextButton={hideNextButton}
						onAudioEnd={onAudioEnd}
						onPressNext={onPressNext}
						nextEnabled={nextEnabled}
						nextTarget={nextTarget}
					/>
				) : null
			}
		</View>
	);
};

const ScrollWrapper = ({ scrollDisabled, children }: { scrollDisabled: boolean, children: ReactChild }) => (
	scrollDisabled
		? <View style={styles.childrenContainer}>{children}</View>
		: <ScrollView contentContainerStyle={styles.childrenContainer}>{children}</ScrollView>
);
