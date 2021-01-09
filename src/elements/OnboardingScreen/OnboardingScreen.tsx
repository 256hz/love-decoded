import React, { ReactChild } from 'react';
import { Text, View } from 'react-native';
import Logo from '@assets/svg/logo.svg';
import { BackgroundFade } from './BackgroundFade';
import styles from './OnboardingScreen.styles';

interface Props {
	children: ReactChild;
	drawShapes?: number[];
	showLogo?: boolean;
	title?: string;
}

const OnboardingScreen = ({ children = <></>, drawShapes, title, showLogo }: Props) => (
	<View style={styles.container}>
		<BackgroundFade drawShapes={drawShapes}>
			<>
				{ showLogo ? (
					<View style={styles.logoContainer}>
						<Logo />
					</View>
				) : <></>}

				<View style={[
					styles.titleContainer,
					showLogo ? { marginTop: 21 } : null,
				]}>
					<Text style={styles.titleText}>
						{title}
					</Text>
				</View>

				{children}
			</>
		</BackgroundFade>
	</View>
);

export default OnboardingScreen;
