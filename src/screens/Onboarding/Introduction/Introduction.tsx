import React from 'react';
import { View } from 'react-native';
import { OnboardingScreen, AudioPlayerNavigator } from '@elements';
import styles from './Introduction.styles';

export default () => (
	<>
		<OnboardingScreen drawShapes={[ 14, 15, 16 ]}>
			<View style={styles.container}>
				<AudioPlayerNavigator />
			</View>
		</OnboardingScreen>
	</>
);
