import { AudioPlayerNavigator, OnboardingScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './WhenYouForget.styles';

export default () => (
	<OnboardingScreen drawShapes={[ 1, 7, 11 ]}>
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.headline}>
					{'When You Forget\nThat You Were'}
				</Text>
				<Text style={[ styles.headline, styles.highlight ]}>
					Born To Be Loved
				</Text>
				<Text style={styles.headline}>
					{'and Don’t Love\nYourself Enough....'}
				</Text>
			</View>
			<AudioPlayerNavigator
				audioFilename="music128.mp3"
				nextTarget={Screens.TheScienceOfLove}
			/>
		</View>
	</OnboardingScreen>
);
