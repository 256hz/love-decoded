import { AudioPlayerNavigator, OnboardingScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './TheScienceOfLove.styles';
//
export default () => (
	<OnboardingScreen
		drawShapes={[ 1, 7, 11 ]}
		showLogo={true}
		title={'The Science of Love\nA Pioneering Discovery'}
	>
		<View style={styles.container}>
			<View style={styles.topTextContainer}>
				<Text style={styles.topText}>
					{'Love is Nourishment\nlike'}
					<Text style={[ styles.topText, styles.highlight ]}> Air, Food, And Water </Text>
					{'\nwhich is why is it necessary to\nlearn to love yourself!'}
				</Text>
			</View>
			<View>

				<AudioPlayerNavigator
					audioFilename="music.mp3"
					nextTarget={Screens.WhatWouldILikeToLearn}
				/>
			</View>
		</View>
	</OnboardingScreen>
);
