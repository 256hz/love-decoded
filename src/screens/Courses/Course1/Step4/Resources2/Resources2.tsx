import React from 'react';
import { Text, View } from 'react-native';
import { Course1Step4Screens } from 'route/Steps/Course1Screens';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import styles from './Resources2.styles';

export default ({ navigation }) => {
	return (
		<ResourcesScreen
			hideBackButton
			nextTarget={Course1Step4Screens.Resources3}
			navigation={navigation}
		>
			<View style={styles.container}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.text}>
						Understanding why being deprived of love causes pain will help you avoid behaving unlovingly.
					</Text>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.text}>
						Writing a relationship vision together gets any unspoken expectations and anxieties into the open. It will establish that you are a team in full control over the direction and quality of your relationship.
					</Text>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.text}>
						Practicing communication and listening exercises together will make you more compassionate when discussing difficult, emotionally charged topics.
					</Text>
				</View>
			</View>
		</ResourcesScreen>
	);
};
