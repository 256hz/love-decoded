import React, { ReactChild } from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import Triangle5 from '@assets/svg/mastering-love/triangle-5.svg';
import Triangle10 from '@assets/svg/mastering-love/triangle-10.svg';
import Triangle20 from '@assets/svg/mastering-love/triangle-20.svg';
import Triangle30 from '@assets/svg/mastering-love/triangle-30.svg';
import Triangle50 from '@assets/svg/mastering-love/triangle-50.svg';
import Triangle75 from '@assets/svg/mastering-love/triangle-75.svg';
import Triangle90 from '@assets/svg/mastering-love/triangle-90.svg';
import { OnboardingScreen } from '@elements';
import styles from './MasteringLove.styles';

const Triangle = ({ text, children }: { text: string, children: ReactChild }) => (
	<View style={styles.triangleContainer}>
		{children}
		<View style={styles.triangleTextContainer}>
			<Text style={styles.triangleText}>
				{text}
			</Text>
		</View>
	</View>
);

export default () => (
	<OnboardingScreen
		drawShapes={[ 1, 7, 11 ]}
		title={'Mastering Love\nof Self and Others'}
		audioFilename="onboarding_7_the_learning_pyramid.mp3"
		nextTarget={Screens.FromComfort}
	>
		<View style={styles.container}>
			<View style={styles.bodyContainer}>
				<Text style={styles.bodyText}>
					This course is based on hard science.  This
					<Text style={styles.highlight}> Learning Pyramid </Text>
					shows you how to maximize your learning.  Each are average Learning Retention Rates.
				</Text>
			</View>
			<View style={styles.allTrianglesContainer}>
				<Triangle text="Lecture 5%">
					<Triangle5 />
				</Triangle>
				<Triangle text="Reading 10%">
					<Triangle10 />
				</Triangle>
				<Triangle text="Audio Visual 20%">
					<Triangle20 />
				</Triangle>
				<Triangle text="Demonstration 30%">
					<Triangle30 />
				</Triangle>
				<Triangle text="Discussion Group 50%">
					<Triangle50 />
				</Triangle>
				<Triangle text="Practice by Doing 75%">
					<Triangle75 />
				</Triangle>
				<Triangle text="Sharing with Others 90%">
					<Triangle90 />
				</Triangle>
			</View>
		</View>
	</OnboardingScreen>
);
