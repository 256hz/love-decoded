import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';
import styles from './EmotionalResetButton.styles';

export default () => {
	const [ backDisabled, setBackDisabled ] = useState(true);

	return (
		<OnboardingScreen
			audioFilename="onboarding_38c_erb_ready_to_quit.mp3"
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
					Ready to quit on yourself and the App?
				</Text>
			</View>
		</OnboardingScreen>
	);
};
