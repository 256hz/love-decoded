import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step5Screens } from 'route/Steps/Course1Screens';
import { StepScreen } from '@elements';
import styles from './Activities5.styles';

export default () => {
	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={Course1Step5Screens.Activities6}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							An Effective Communication’s four pillars –
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Examples: Our marriage is important to me; our relationship is valuable to me; our friendship is important to me; our collaboration is important to me; you are a valuable client to me; and so forth. This is a reminder for both of you of the relationship’s importance. This is the context. Then you can express your awareness and your vision.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
