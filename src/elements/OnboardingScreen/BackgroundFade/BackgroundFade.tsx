import { BackgroundShape } from 'elements/OnboardingScreen/BackgroundShape';
import React, { ReactChild } from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './BackgroundFade.styles';

interface Props {
	children: ReactChild;
	drawShapes?: number[];
}

export default ({ children = <></>, drawShapes = [] }: Props) => (
	<>
		<ImageBackground
			source={require('@assets/png/default-background.png')}
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
