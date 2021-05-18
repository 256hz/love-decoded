import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step7Screens } from 'route/Steps/Course1Screens';
import { StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	return (
		<StepScreen
			nextTarget={Course1Step7Screens.Activities2}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, styles.boldText ]}>
							How to Mirror Effectively
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							One person is always the Sender – the one who has something they want to communicate – and there is always a Receiver – the one to whom the Sender wants to talk to.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• Sender - always ask the other person “Is this a good time to talk?” – it shows respect – accept the time the receiver suggests – it is best to talk to someone when they are prepared, rather than taking them by surprise.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• Always sit facing each other – in close proximity – make eye contact
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• The Sender speaks in two or three short sentences at a time – allowing the Receiver to remember exactly what was sent
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							• The receiver says, “What I’m hearing you say is…” and then repeats verbatim what the Sender said.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
