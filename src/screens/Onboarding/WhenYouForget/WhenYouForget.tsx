import { OnboardingScreen } from '@elements';
import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import styles from './WhenYouForget.styles';

export default () => (
	<OnboardingScreen
		drawShapes={[ 1, 7, 11 ]}
		audioFilename="onboarding_5_when_you_forget.mp3"
		nextTarget={OnboardingScreens.TheScienceOfLove}
		scrollDisabled
		showLogo
	>
		<View style={styles.container}>
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
	</OnboardingScreen>
);
