import { OnboardingScreen } from '@elements';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import styles from './EmotionalResetButton.styles';

export default () => {
	const [ backDisabled, setBackDisabled ] = useState(true);

	return (
		<OnboardingScreen
			audioFilename="onboarding_38a_erb_frustrated_with_yourself.mp3"
			drawShapes={[ 7, 25 ]}
			hideNextButton={true}
			hideBackButton={backDisabled}
			onAudioEnd={() => setBackDisabled(false)}
			nextTarget={OnboardingScreens.BriefOverviewOfButtons}
			title="Emotional RESET Button"
			titleContainerStyle={styles.frustratedTitleContainerStyle}
		>
			<View style={styles.container}>
				<Text style={styles.text}>
					Frustrated with your progress? Something making you sad?
				</Text>
			</View>
		</OnboardingScreen>
	);
};
