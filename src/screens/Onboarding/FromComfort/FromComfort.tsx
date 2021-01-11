import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import { OnboardingScreen } from '@elements';
import styles from './FromComfort.styles';

export default () => (
	<OnboardingScreen
		drawShapes={[ 1, 7, 11 ]}
		title={'From Comfort to Fear\nto Learning to Growth'}
		audioFilename="music128.mp3"
		nextTarget={Screens.TheScienceOfLove}
	>
		<View style={styles.container}>
			<View style={styles.bodyContainer}>
				<Text style={styles.bodyText}>
					Expanding Your Comfort Zone: Necessary for Realizing That You Were
					<Text style={styles.highlight}> Born To Be Loved.</Text>
				</Text>
			</View>

			<View style={styles.allCirclesContainer}>

				<View style={styles.circle1}>
					<View style={styles.circle1text1}>
						<Text style={styles.circleText}>
							low risk, low reward
						</Text>
					</View>
					<View style={styles.circle1text2}>
						<Text style={styles.circleText}>
							safe and in control
						</Text>
					</View>
				</View>

				<View style={styles.circle2}>
					<View style={styles.circle2text1}>
						<Text style={styles.circleText}>
							find excuses
						</Text>
					</View>
					<View style={styles.circle2text2}>
						<Text style={styles.circleText}>
							{'low self-\nconfidence'}
						</Text>
					</View>
					<View style={styles.circle2text3}>
						<Text style={styles.circleText}>
							{"affected\nby others'\nopinions"}
						</Text>
					</View>
				</View>

				<View style={styles.circle3}>
					<View style={styles.circle3text1}>
						<Text style={styles.circleText}>
							{'Face\nChallenges'}
						</Text>
					</View>
					<View style={styles.circle3text2}>
						<Text style={styles.circleText}>
							{'Problem\nSolve'}
						</Text>
					</View>
					<View style={styles.circle3text3}>
						<Text style={styles.circleText}>
							{'Extend\nComfort\nZone'}
						</Text>
					</View>
					<View style={styles.circle3text4}>
						<Text style={styles.circleText}>
							{'Acquire\nNew\nSkills'}
						</Text>
					</View>
				</View>

				<View style={styles.circle4}>
					<View style={styles.circle4text1}>
						<Text style={styles.circleText}>
							{'Find\nPurpose'}
						</Text>
					</View>
					<View style={styles.circle4text2}>
						<Text style={styles.circleText}>
							{'Live\nDreams'}
						</Text>
					</View>
					<View style={styles.circle4text3}>
						<Text style={styles.circleText}>
							{'Set\nGoals'}
						</Text>
					</View>
					<View style={styles.circle4text4}>
						<Text style={styles.circleText}>
							{'Conquer\nObjectives'}
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.middleLine}>
				<View style={[ styles.middleDot1, styles.middleDot ]} />
				<View style={[ styles.middleDot2, styles.middleDot ]} />
				<View style={[ styles.middleDot3, styles.middleDot ]} />
				<View style={[ styles.middleDot4, styles.middleDot ]} />
			</View>

			<View style={styles.middleTextContainer}>
				<View style={[ styles.middleTextBox, styles.middleText1 ]}>
					<Text style={styles.middleText}>{'comfort\n\nzone'}</Text>
				</View>
				<View style={[ styles.middleTextBox, styles.middleText2 ]}>
					<Text style={styles.middleText}>{'fear\n\nzone'}</Text>
				</View>
				<View style={[ styles.middleTextBox, styles.middleText3 ]}>
					<Text style={styles.middleText}>{'learning\n\nzone'}</Text>
				</View>
				<View style={[ styles.middleTextBox, styles.middleText4 ]}>
					<Text style={styles.middleText}>{'growth\n\nzone'}</Text>
				</View>
			</View>

		</View>
	</OnboardingScreen>
);
