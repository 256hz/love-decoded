import React, {
	Dispatch, ReactChild, SetStateAction, useState,
} from 'react';
import { View, ViewStyle } from 'react-native';
import { Screens } from 'route/enums';
import DownArrow from '@assets/svg/down-arrow.svg';
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
	const [ scrollIndicatorVisible, setScrollIndicatorVisible ] = useState(false);

	return (
		<View style={[ styles.container, containerStyle ]}>
			<View style={styles.middleContainer}>
				<ScrollWrapper
					scrollDisabled={scrollDisabled}
					setScrollIndicatorVisible={setScrollIndicatorVisible}
				>
					{children}
				</ScrollWrapper>

				{ scrollIndicatorVisible ? <ScrollIndicator /> : null}

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

type ScrollWrapperProps = {
	children: ReactChild,
	scrollDisabled: boolean,
	setScrollIndicatorVisible: Dispatch<SetStateAction<boolean>>;
};

const ScrollWrapper = ({
	children,
	scrollDisabled,
	setScrollIndicatorVisible,
}: ScrollWrapperProps) => (
	scrollDisabled
		? <View style={styles.childrenContainer}>{children}</View>
		: (
			<CustomScrollView setScrollIndicatorVisible={setScrollIndicatorVisible}>
				{children}
			</CustomScrollView>
		)
);

const ScrollIndicator = () => (
	<View style={styles.scrollIndicatorContainer}>
		<DownArrow fill={colors.Gray62} />
	</View>
);
