import React, { ReactChild } from 'react';
import { Text, View } from 'react-native';
import { BackgroundFade } from './BackgroundFade';
import styles from './OnboardingScreen.styles';

interface Props {
	children: ReactChild;
	drawShapes?: number[];
}

const OnboardingScreen = ({ children = <View />, drawShapes }: Props) => (
	<View style={styles.container}>
		<BackgroundFade drawShapes={drawShapes}>
			{children}
		</BackgroundFade>
	</View>
);

export default OnboardingScreen;
