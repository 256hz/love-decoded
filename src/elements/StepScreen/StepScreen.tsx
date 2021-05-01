import React, { ReactChild } from 'react';
import { Platform, View, ViewStyle } from 'react-native';
import { Screens } from 'route/enums';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import { CustomScrollView } from '@elements/CustomScrollView';
import colors from '@elements/globalStyles/color';
import styles from './StepScreen.styles';

type Props = {
	audioFilename?: string;
	backTarget?: Screens;
	children: ReactChild;
	containerStyle?: ViewStyle;
	customMiddleContent?: ReactChild;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	onAudioEnd?: () => void;
	onPressNext?: () => void;
	nextEnabled?: boolean;
	nextTarget?: Screens;
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
			<View style={styles.middleContainer}>
				<CustomScrollView
					indicatorArrowColor={colors.Gray62}
					scrollDisabled={scrollDisabled}
				>
					{children}
				</CustomScrollView>
			</View>

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
