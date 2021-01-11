import React, { ReactChild } from 'react';
import { Text, View } from 'react-native';
import Logo from '@assets/svg/logo.svg';
import { AudioPlayerNavigator } from 'elements/AudioPlayerNavigator';
import { AudioPlayerNavigatorProps } from 'elements/AudioPlayerNavigator/AudioPlayerNavigator';
import { BackgroundFade } from './BackgroundFade';
import styles from './OnboardingScreen.styles';

type Props = {
	children: ReactChild;
	drawShapes?: number[];
	showLogo?: boolean;
	title?: string;
} & AudioPlayerNavigatorProps;

const OnboardingScreen = ({
	audioFilename,
	backTarget,
	children = <></>,
	customButtons,
	drawShapes,
	onNextCallback,
	nextTarget,
	showLogo,
	title,
}: Props) => {
	const showAudioPlayerNavigator = !!audioFilename && !!nextTarget;

	return (
		<View style={styles.container}>
			<BackgroundFade drawShapes={drawShapes}>
				<View style={styles.screenContainer}>

					<View style={styles.container}>
						{ showLogo && (
							<View style={styles.logoContainer}>
								<Logo />
							</View>
						)}

						<View style={[
							styles.titleContainer,
							showLogo && { marginTop: 21 },
						]}>
							<Text style={styles.titleText}>
								{title}
							</Text>
						</View>
						<View style={styles.container}>
							{children}
						</View>
					</View>
					{ audioFilename && (
						<AudioPlayerNavigator
							backTarget={backTarget}
							customButtons={customButtons}
							onNextCallback={onNextCallback}
							nextTarget={nextTarget}
							audioFilename={audioFilename}
						/>
					)}
				</View>
			</BackgroundFade>
		</View>
	);
};

export default OnboardingScreen;
