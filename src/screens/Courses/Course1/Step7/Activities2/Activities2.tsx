import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step7Screens } from 'route/Steps/Course1Screens';
import { StepScreen } from '@elements';
import styles from './Activities2.styles';

export default () => {
	return (
		<StepScreen
			nextTarget={Course1Step7Screens.Activities3}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• Then the Receiver asks, “Did I hear you correctly?”
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• Sender gives either a ‘pass’ - or ‘no pass’ – if it is ‘no pass’ it is repeated by the Sender – this is done until the Sender feels the receiver heard it correctly
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• Once it is “pass” the Receiver asks the Sender “Is there anything more you would like to say about that?” – Receivers need to be curious about how the other person feels or thinks vs. being defensive, cutting them short, invalidating them.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• Once the Sender has completed she or he might ask, “Is there something you would like to say about what I said?” This continues, using mirroring, until the response communication is completed.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, styles.boldText ]}>
							Now, ask one of the persons from your “unconditional circle” to practice with you.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
