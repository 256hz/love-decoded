import { AudioPlayerNavigator, CardCarousel, OnboardingScreen } from 'elements';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import styles from './TheScienceOfLove.styles';

const cards = [
	{
		title: 'Helpful Links',
		body: 'Read about the following facts that support the theory that love is nourishment like air, food, and water.',
		bottomElement: <Text style={[ styles.topText, styles.footerText ]}>swipe left to see more</Text>,
	},
	{
		title: 'Link #1',
		body: 'Survival rates of cancer patients who are surrounded by love and love self is 40% higher.',
		link: 'http://www.google.com',
	},
	{
		title: 'Link #2',
		body: 'Children’s bodies and brains grow better when mothers are attentive, nurturing, and loving.',
		link: 'http://www.google.com',
	},
	{
		title: 'Link #3',
		body: 'Love and Self-love turns back the aging clock – your cell’s telomeres lengthen with healthy, stress-free lifestyle.',
		link: 'http://www.google.com',
	},
	{
		title: 'Link #4',
		body: 'Premature infants grow faster with attentive, loving massage.',
		link: 'http://www.google.com',
	},
	{
		title: 'Link #5',
		body: 'In her book “The Love Response”, Dr. Eva Selhub, MD explains how love stimulates the relaxation response which in turn generates the production of oxytocin, the hormone most associated with our immune system and health.',
		link: 'http://www.google.com',
		bodyStyle: { fontSize: 13, lineHeight: 19 },
	},
];

export default () => {
	const [ cardIndex, setCardIndex ] = useState(0);

	return (
		<OnboardingScreen
			drawShapes={[ 1, 7, 11 ]}
			showLogo={true}
			title={'The Science of Love:\nA Pioneering Discovery'}
		>
			<View style={styles.container}>
				<View style={styles.topTextContainer}>
					<Text style={styles.topText}>
						{'Love is Nourishment\nlike'}
						<Text style={[ styles.topText, styles.highlight ]}> Air, Food, And Water </Text>
						{'\nwhich is why is it necessary to\nlearn to love yourself!'}
					</Text>
				</View>
				<View style={styles.cards}>
					<CardCarousel cards={cards} />
				</View>

				<AudioPlayerNavigator
					audioFilename="music.mp3"
					nextTarget={Screens.WhatWouldILikeToLearn}
				/>
			</View>
		</OnboardingScreen>
	);
};
