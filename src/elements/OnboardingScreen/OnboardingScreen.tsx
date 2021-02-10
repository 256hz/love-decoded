import React, { ReactChild } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
	hideNextButton?: boolean;
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
	hideNextButton,
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

					{/* screen contents */}
					<ScrollView contentContainerStyle={styles.childrenContainer}>
						{children}
					</ScrollView>

				</View>

				{ customBottomSection }

				{ nextTarget && (
					<AudioPlayerNavigator
						audioFilename={audioFilename}
						backTarget={backTarget}
						hideBackButton={hideBackButton}
						hideNextButton={hideNextButton}
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
