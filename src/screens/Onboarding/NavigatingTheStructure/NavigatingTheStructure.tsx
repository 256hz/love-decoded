import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import { CardCarousel, OnboardingScreen } from '@elements';
import { DEMO_MODE } from '@App';
import styles from './NavigatingTheStructure.styles';

const cards = [
	{
		BodyElement: () => (
			<View style={[ styles.cardContainer, styles.cardCenterBody ]}>
				<Text style={styles.textBody}>
					The course is divided into 3 stages –{' '}
					<Text style={[ styles.textBody, styles.highlight ]}>
						Introductory, Intermediate, and Advanced.
					</Text>
				</Text>

				<View style={{ width: '100%', height: 20 }} />

				<Text style={styles.textBody}>
					There are 7 Steps in each stage. The Steps focus on various aspects of your relationship with Self, and continually move you toward loving yourself and others.
				</Text>
			</View>
		),
		bottomElement: <Text style={styles.footerText}>swipe left to see more</Text>,
	},
	{
		body: 'Each Step deals with one aspect of your relationship with Self and what loving and unloving behaviors you use – in order to get clear about the positive ones and transform the less than positive ones.',
		centerBody: true,
	},
	{
		BodyElement: () => (
			<View style={[ styles.cardContainer, styles.cardCenterBody ]}>
				<Text style={styles.textBody}>
					Each step takes 7 days or more to complete and each day has
					<Text style={[ styles.textBody, styles.highlight ]}>
						{' 4 components:'}
					</Text>
				</Text>

				<View style={{ width: '100%', height: 10 }} />

				<Text style={[ styles.textBody, styles.textList ]}>
					1. Morning Intention
				</Text>
				<Text style={[ styles.textBody, styles.textList ]}>
					2. Lunchtime Activity
				</Text>
				<Text style={[ styles.textBody, styles.textList ]}>
					3. Dinner Survey
				</Text>
				<Text style={[ styles.textBody, styles.textList ]}>
					4. Bedtime Reflection
				</Text>
			</View>
		),
	},
	{
		BodyElement: () => (
			<View style={[ styles.cardContainer, styles.cardCenterBody ]}>
				<Text style={[ styles.textBody, styles.textBold ]}>
					Total time daily
				</Text>

				<View style={{ width: '100%', height: 16 }} />

				<View style={styles.textAlignLeftContainer}>
					<Text style={[ styles.textBody, styles.textList ]}>
						(25-30 seconds) Morning Intention
					</Text>
					<Text style={[ styles.textBody, styles.textList ]}>
						(2-3 minutes) Lunchtime Activity
					</Text>
					<Text style={[ styles.textBody, styles.textList ]}>
						(20-30 seconds) Dinner Survey
					</Text>
					<Text style={[ styles.textBody, styles.textList ]}>
						(15-20 seconds) Bedtime Reflection
					</Text>
					<Text style={[ styles.textBody, styles.textOrange ]}>
						All of which is 4 - 5 minutes total in comparison to people exercising for an hour a day.
					</Text>
				</View>
			</View>
		),
	},
	{
		body: 'Only Activities invite you to do some actual work. Activities have Worksheets and Resource sheets to help you complete the Activity.\n\nSome Steps may involve encouraging you to share your journey with people close to you.',
		centerBody: true,
	},
	{
		body: 'There is a Journal synched with Steps. We encourage you to write – it absolutely helps you uncover your loving and unloving behaviors toward yourself and others – and helps to transform the negative behaviors.',
		centerBody: true,
	},
	{
		body: 'There is an Emotional Reset button – for when you feel frustrated and think quitting is the solution – it will help you to recommit, to remember why you started in the first place.',
		centerBody: true,
	},
	{
		body: 'Ultimate goal – to help you move from your Comfort Zone to your Fear Zone, into your Learning Zone and eventually to your Growth Zone, while creating a loving, unconditional community that includes those you care about.',
		centerBody: true,
	},
];

export default () => {
	const [ nextEnabled, setNextEnabled ] = useState(DEMO_MODE);

	return (
		<OnboardingScreen
			drawShapes={[ 1, 7, 11 ]}
			title={'Navigating the\nStructure of this App'}
			audioFilename="home_page_explanation_rebecca.mp3"
			nextTarget={OnboardingScreens.BornToBeLoved}
			nextEnabled={nextEnabled}
			scrollDisabled
		>
			<View style={styles.container}>
				<View style={styles.cards}>
					<CardCarousel cards={cards} setNextEnabled={setNextEnabled} />
				</View>
			</View>
		</OnboardingScreen>
	);
};
