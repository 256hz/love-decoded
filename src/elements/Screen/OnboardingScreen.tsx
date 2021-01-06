import React, { ReactChild } from 'react';
import { Text, View } from 'react-native';
import { BackgroundFade } from '@elements';
import styles from './OnboardingScreen.styles';

const OnboardingScreen = ({ children }: { children?: ReactChild }) => (
	<View style={styles.container}>
		<BackgroundFade>
			{children}
		</BackgroundFade>
	</View>
);

export default OnboardingScreen;
