import React, { ReactChild } from 'react';
import { ImageBackground, View } from 'react-native';
import { BackgroundShape } from '@elements/OnboardingScreen/BackgroundShape';
import styles from './BackgroundFade.styles';

interface Props {
	children: ReactChild;
	drawShapes?: number[];
	hideBackgroundImage?: boolean;
}

export default ({ children = <></>, drawShapes = [], hideBackgroundImage }: Props) =>
	hideBackgroundImage
		? (
			<View style={styles.backgroundColorOnly}>
				<BackgroundShape drawShapes={drawShapes} />

				<View style={styles.children}>
					{children}
				</View>
			</View>
		)
		: (
			<>
				<ImageBackground
					source={require('@assets/png/onboarding-background.png')}
					style={styles.background}
					resizeMode="cover"
				>
					<BackgroundShape drawShapes={drawShapes} />

					<View style={styles.children}>
						{children}
					</View>
				</ImageBackground>
			</>
		);
