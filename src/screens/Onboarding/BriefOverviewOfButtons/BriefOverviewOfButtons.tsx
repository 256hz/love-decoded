import React from 'react';
import { Text, View } from 'react-native';
import EmotionalReset from '@assets/svg/emotional-reset.svg';
import Faq from '@assets/svg/faq.svg';
import Home from '@assets/svg/home.svg';
import Journal1 from '@assets/svg/journal-1.svg';
import Journal2 from '@assets/svg/journal-2.svg';
import SettingsDot from '@assets/svg/settings-dot.svg';
import { OnboardingScreens } from 'route/enums';
import { OnboardingScreen } from '@elements';
import colors from '@elements/globalStyles/color';
import styles from './BriefOverviewOfButtons.styles';

const OverviewItem = ({ children, iconText, text }) => (
	<View style={styles.buttonContainer}>
		<View style={styles.iconAndTextContainer}>
			<View style={styles.iconContainer}>
				{children}
			</View>
			<Text style={styles.iconText}>
				{iconText}
			</Text>
		</View>
		<View style={styles.textContainer}>
			<Text style={styles.text}>
				{text}
			</Text>
		</View>
	</View>
);

export default () => (
	<OnboardingScreen
		drawShapes={[ 7, 25 ]}
		nextTarget={OnboardingScreens.AddYourContacts}
		scrollDisabled
		title={'Brief Overview\nof the App Buttons'}
	>
		<View style={styles.container}>
			<OverviewItem
				text="The settings three buttons appear on the top left of the screens for all four tabs on the bottom. This provides access to my community, facebook group, profile, and etc."
				iconText="Settings"
			>
				<SettingsDot fill={colors.Orange} />
				<View style={styles.dotSpace} />
				<SettingsDot fill={colors.Red} />
				<View style={styles.dotSpace} />
				<SettingsDot fill={colors.Pink} />
			</OverviewItem>

			<OverviewItem
				text="This button will take you to a page that allows you access the course, as well as reviewing past steps. "
				iconText="Home"
			>
				<Home fill={colors.Orange} />
			</OverviewItem>

			<OverviewItem
				text="One of the most effective tools for learning and healing. Make it a habit to use it every day."
				iconText="Journal"
			>
				<Journal1 fill={colors.Orange} />
				<View style={styles.journalSpace} />
				<Journal2 fill={colors.Orange} />
			</OverviewItem>

			<OverviewItem
				text="Answers to the most common questions. You are also welcome to send us your questions!"
				iconText="FAQ"
			>
				<Faq fill={colors.Orange} />
			</OverviewItem>

			<OverviewItem
				text="We're here to support you - don't wait till you reach a point of frustration with yourself or the App and consider quitting.  "
				iconText={'Emotional\nReset'}
			>
				<EmotionalReset fill={colors.Orange} />
			</OverviewItem>
		</View>
	</OnboardingScreen>
);
