import React, {
	Dispatch, ReactChild, SetStateAction, useState,
} from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@assets/svg/logo.svg';
import DownArrow from '@assets/svg/down-arrow.svg';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import { AudioPlayerNavigatorProps } from '@elements/AudioPlayerNavigator/AudioPlayerNavigator';
import { CustomScrollView } from '@elements/CustomScrollView';
import colors from 'elements/globalStyles/color';
import { BackgroundFade } from './BackgroundFade';
import styles from './OnboardingScreen.styles';

type Props = {
	children: ReactChild;
	customBottomSection?: ReactChild,
	drawShapes?: number[];
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	scrollDisabled?: boolean;
	showLogo?: boolean;
	title?: string;
	titleChild?: ReactChild,
	titleContainerStyle?: ViewStyle;
} & AudioPlayerNavigatorProps;

export default ({
	audioFilename,
	backTarget,
	children = <></>,
	customBottomSection = <></>,
	customButtons,
	drawShapes,
	hideBackButton,
	hideNextButton,
	onAudioEnd,
	onPressNext,
	nextEnabled,
	nextTarget,
	scrollDisabled = false,
	showLogo,
	title,
	titleChild = <></>,
	titleContainerStyle,
}: Props) => {
	const [ scrollIndicatorVisible, setScrollIndicatorVisible ] = useState(false);

	return (
		<View style={styles.container}>
			{/* Background image/shapes */}
			<BackgroundFade drawShapes={drawShapes}>
				<SafeAreaView style={styles.screenContainer}>
					<View style={styles.container}>
						{ showLogo ? (
							<View style={styles.logoContainer}>
								<Logo />
							</View>
						)
							: null
						}

						{/* Title */}
						<View style={[
							styles.titleContainer,
							showLogo && styles.titleLogoMargin,
							titleContainerStyle,
						]}>
							<Text style={styles.titleText}>
								{title}
							</Text>
							{ titleChild }
						</View>

						{/* screen contents */}
						<ScrollWrapper
							scrollDisabled={scrollDisabled}
							setScrollIndicatorVisible={setScrollIndicatorVisible}
						>
							{children}
						</ScrollWrapper>

						{ scrollIndicatorVisible ? <ScrollIndicator /> : null}
					</View>


					{ customBottomSection }

					{ nextTarget
						? (
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
						)
						: null
					}

					{ audioFilename && customButtons
						? (
							<AudioPlayerNavigator
								audioFilename={audioFilename}
								customButtons={customButtons}
								onAudioEnd={onAudioEnd}
							/>
						)
						: null
					}
				</SafeAreaView>
			</BackgroundFade>
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
		<View style={styles.scrollIndicator}>
			<DownArrow fill={colors.Gray92} />
		</View>
	</View>
);
