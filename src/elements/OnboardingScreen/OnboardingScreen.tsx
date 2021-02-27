import React, { ReactChild, useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '@assets/svg/logo.svg';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import { AudioPlayerNavigatorProps } from '@elements/AudioPlayerNavigator/AudioPlayerNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
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
	onNextCallback,
	nextEnabled,
	nextTarget,
	scrollDisabled = false,
	showLogo,
	title,
	titleChild = <></>,
	titleContainerStyle,
}: Props) => {
	const [ shouldPause, setShouldPause ] = useState(false);

	// pause when navigating away
	useFocusEffect(() => {
		return () => {
			setShouldPause(true);
		};
	});

	return (
		<View style={styles.container}>
			<BackgroundFade drawShapes={drawShapes}>
				<SafeAreaView style={styles.screenContainer}>
					<View style={styles.container}>
						{ showLogo && (
							<View style={styles.logoContainer}>
								<Logo />
							</View>
						)}

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

					{ nextTarget && (
						<AudioPlayerNavigator
							audioFilename={audioFilename}
							backTarget={backTarget}
							hideBackButton={hideBackButton}
							hideNextButton={hideNextButton}
							onAudioEnd={onAudioEnd}
							onNextCallback={onNextCallback}
							nextEnabled={nextEnabled}
							nextTarget={nextTarget}
						/>
					)}

					{ audioFilename && customButtons && (
						<AudioPlayerNavigator
							audioFilename={audioFilename}
							customButtons={customButtons}
							onAudioEnd={onAudioEnd}
						/>
					)}
				</SafeAreaView>
			</BackgroundFade>
		</View>

	);
};
const ScrollWrapper = ({ scrollDisabled, children }: { scrollDisabled: boolean, children: ReactChild }) => (
	scrollDisabled
		? <View style={styles.childrenContainer}>{children}</View>
		: <ScrollView contentContainerStyle={styles.childrenContainer}>{children}</ScrollView>
);

export default OnboardingScreen;
