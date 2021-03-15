import React, { ReactChild } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@assets/svg/logo.svg';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import { AudioPlayerNavigatorProps } from '@elements/AudioPlayerNavigator/AudioPlayerNavigator';
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

const OnboardingScreen = ({
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
}: Props) => (
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
					<ScrollWrapper scrollDisabled={scrollDisabled}>
						{children}
					</ScrollWrapper>
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

const ScrollWrapper = ({ scrollDisabled, children }: { scrollDisabled: boolean, children: ReactChild }) => (
	scrollDisabled
		? <View style={styles.childrenContainer}>{children}</View>
		: <ScrollView contentContainerStyle={styles.childrenContainer}>{children}</ScrollView>
);

export default OnboardingScreen;
