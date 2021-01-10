import { AudioPlayerNavigator, OnboardingScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './HavingTheLovingCommunities.styles';

export default () => (
	<OnboardingScreen drawShapes={[ 1, 7, 11 ]}>
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.headline}>
					Having The Unconditionally Loving Communities You Deserve
				</Text>
			</View>
			<AudioPlayerNavigator
				audioFilename="music128.mp3"
				nextTarget={Screens.WhenYouForget}
			/>
		</View>
	</OnboardingScreen>
);
