import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/enums';
import { CardCarousel, OnboardingScreen } from '@elements';
import styles from './TheScienceOfLove.styles';

const cards = [ {
	title: 'Helpful Links',
	body: 'Read about the following facts that support the theory that love is nourishment like air, food, and water.',
	bottomElement: <Text style={styles.footerText}>swipe left to see more</Text>,
}, {
	title: 'Link #1',
	body: 'Survival rates are 40% higher in cancer patients who are surrounded by love and self-love.',
	link: 'https://source.wustl.edu/2012/01/moms-love-good-for-childs-brain/',
}, {
	title: 'Link #2',
	body: 'Children’s bodies and brains grow better when mothers are attentive, nurturing, and loving.',
	link: 'https://www.pnas.org/content/109/8/2854',
}, {
	title: 'Link #3',
	body: 'Love and Self-love turns back the aging clock – your cell’s telomeres lengthen with healthy, stress-free lifestyle.',
	link: 'https://www.sciencedirect.com/science/article/pii/S0306453018309089',
}, {
	title: 'Link #4',
	body: 'Premature infants grow faster with attentive, loving massage.',
	link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2844909/',
}, {
	title: 'Link #5',
	body: 'In her book “The Love Response”, Dr. Eva Selhub, MD explains how love stimulates the relaxation response which in turn generates the production of oxytocin, the hormone most associated with our immune system and health.',
	link: 'https://www.drselhub.com/books/the-love-response/',
	bodyStyle: { fontSize: 13, lineHeight: 19 },
} ];

export default () => {
	const [ nextEnabled, setNextEnabled ] = useState(false);

	return (
		<OnboardingScreen
			drawShapes={[ 1, 7, 11 ]}
			title={'The Science of Love:\nA Pioneering Discovery'}
			audioFilename="onboarding_6_the_science_of_love.mp3"
			nextTarget={Screens.MasteringLove}
			nextEnabled={nextEnabled}
		>
			<View style={styles.container}>
				<View style={styles.topTextContainer}>
					<Text style={styles.topText}>
						{'Love is Nourishment\nlike'}
						<Text style={styles.highlight}> Air, Food, And Water </Text>
						{'\nwhich is why is it necessary to\nlearn to love yourself!'}
					</Text>
				</View>

				<View style={styles.cards}>
					<CardCarousel cards={cards} setNextEnabled={setNextEnabled} />
				</View>
			</View>
		</OnboardingScreen>
	);
};
