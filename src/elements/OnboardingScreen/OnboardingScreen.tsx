import React, { ReactChild } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import Logo from '@assets/svg/logo.svg';
import { AudioPlayerNavigator } from 'elements/AudioPlayerNavigator';
import { AudioPlayerNavigatorProps } from 'elements/AudioPlayerNavigator/AudioPlayerNavigator';
import { BackgroundFade } from './BackgroundFade';
import styles from './OnboardingScreen.styles';

type Props = {
	children: ReactChild;
	customBottomSection?: ReactChild,
	drawShapes?: number[];
	hideBackButton?: boolean;
	showLogo?: boolean;
	title?: string;
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
	onNextCallback,
	nextEnabled,
	nextTarget,
	showLogo,
	title,
	titleContainerStyle,
}: Props) => (
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
						showLogo && styles.titleLogoMargin,
						titleContainerStyle,
					]}>
						<Text style={styles.titleText}>
							{title}
						</Text>
					</View>
					<View style={styles.container}>
						{children}
					</View>
				</View>

				{ customBottomSection }

				{ nextTarget && (
					<AudioPlayerNavigator
						audioFilename={audioFilename}
						backTarget={backTarget}
						hideBackButton={hideBackButton}
						onNextCallback={onNextCallback}
						nextEnabled={nextEnabled}
						nextTarget={nextTarget}
					/>
				)}

				{ audioFilename && customButtons && (
					<AudioPlayerNavigator
						customButtons={customButtons}
						audioFilename={audioFilename}
					/>
				)}
			</View>
		</BackgroundFade>
	</View>
);

export default OnboardingScreen;
