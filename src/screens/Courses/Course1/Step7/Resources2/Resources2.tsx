import React from 'react';
import { Text, View } from 'react-native';
import { CourseCommonScreens } from 'route/enums';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import styles from './Resources2.styles';

const statements = [
	'4. The receiver says, “What I’m hearing you say is...” and repeats the sender’s sentences verbatim. When finished, the receiver asks, “Did I hear you correctly?”',
	'5. The sender indicates pass or no pass. In instances of the latter, the sender repeats the sentences until the receiver gets a pass.',
	'6. Sit face-to-face in close proximity and determine who is the sender and who is the receiver. The sender asks, “Is this a good time to talk?”',
	'7. The receiver asks each time, “Is there anything more you would like to say about that?”',
	'8. Continue until the communication is complete.',
];

export default ({ navigation }) => {
	const onClose = () => navigation.pop(2);

	return (
		<ResourcesScreen
			onClose={onClose}
			onPressNext={onClose}
			nextTarget={CourseCommonScreens.None}
			nextTitle="Close"
			navigation={navigation}
		>
			<View style={styles.container}>
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
