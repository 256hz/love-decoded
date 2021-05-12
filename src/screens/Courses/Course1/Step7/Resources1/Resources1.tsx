import React from 'react';
import { Text, View } from 'react-native';
import { Course1Step6Screens } from 'route/Steps/Course1Screens';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import styles from './Resources1.styles';

const statements = [
	'1. Sit face-to-face in close proximity and determine who is the sender and who is the receiver. The sender asks, “Is this a good time to talk?”',
	'2. The relationship we have is more important than the upset',
	'3. You did not hurt, upset, or disappoint me on purpose (removes all blame)',
	'How does your body feel when talking to someone about a difficult subject - or when someone is critical of you? Where do you feel it?',
	'Breathe deeply, release pressure by breathing out. After any difficult interaction stretch your arms, your back, and waist up.',
];

export default ({ navigation }) => {
	return (
		<ResourcesScreen
			hideBackButton
			nextTarget={Course1Step6Screens.Resources2}
			navigation={navigation}
		>
			<View style={styles.container}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.text}>
						Simply put, mirroring involves repeating word for word two to three short sentences at a time that one person says to another. It involves a person who wants to communicate (the sender) and a person who will be listening and repeating/mirroring (the receiver).
					</Text>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.boldText}>
						Follow the following steps:
					</Text>
				</View>

				{ statements.map(item => (
					<View style={styles.listTextItem} key={item}>
						<Text style={styles.itemText}>
							{item}
						</Text>
					</View>
				))}
			</View>
		</ResourcesScreen>
	);
};
