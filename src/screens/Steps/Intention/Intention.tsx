import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Slider, StepScreen } from '@elements';
import { StepScreens } from 'route/enums';
import styles from './Intention.styles';

export default () => {
	const title = 'Discovering Your Lovable Qualities';
	const subtitle = 'Intention';
	const [ howAreYouFeeling, setHowAreYouFeeling ] = useState(1);

	console.log(howAreYouFeeling);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={StepScreens.GoodJob}
			// TODO: why
			containerStyle={{ paddingTop: -44 }}
		>
			<View>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>{title}</Text>
					<Text style={styles.subtitleText}>{subtitle}</Text>
				</View>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, { textAlign: 'center' } ]}>
							On a scale from 1-10, How are you feeling today?
						</Text>
					</View>

					<View style={styles.sliderContainer}>
						<Slider onValueChanged={setHowAreYouFeeling} />
					</View>

					<Text style={styles.textItemContainer}>
						1.  Which qualities do you value most in other people?
					</Text>
					<Text style={styles.textItemContainer}>
						2.  Which are the qualities that people like about you?
					</Text>
					<Text style={styles.textItemContainer}>
						3.  Which qualities do you like about yourself?
					</Text>
					<Text style={styles.textItemContainer}>
						4.  Which is the nicest compliment you’ve ever received?
					</Text>
				</View>
			</View>
		</StepScreen>
	);
};
