import React from 'react';
import { Text, View } from 'react-native';
import ResourcesScreen from 'screens/Courses/Common/ResourcesScreen';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Resources.styles';

const words = [
	'Agreeing',
	'Angry',
	'Argumentative',
	'Bossy',
	'Clingy',
	'Disloyal',
	'Embarrassed',
	'Fawning',
	'Fierce',
	'Grumpy',
	'Helpless',
	'Impulsive',
	'Indecisive',
	'Jealous',
	'Lazy',
	'Materialistic',
	'Nervous',
	'Obnoxious',
	'Offensive',
	'Panicky',
	'Rude',
	'Scary',
	'Unpleasant',
	'Uptight',
	'Worried',
];

export default ({ navigation }) => (
	<ResourcesScreen
		hideBackButton
		navigation={navigation}
		scrollDisabled
	>
		<View style={styles.container}>
			<View style={styles.subtitleContainer}>
				<Text style={styles.subtitleText}>
					This list of resouces is designed to help you recognize your unloveable qualities.
				</Text>

				<Text style={[ styles.subtitleText, styles.grayText ]}>
					scroll through
				</Text>
			</View>

			<View style={styles.scrollContainer}>
				<ScrollView contentContainerStyle={styles.scrollItemsContainer} style={styles.scrollWindow}>
					{ words.map(word => (
						<Text style={styles.listTextItem} key={word}>
							{word}
						</Text>
					))}
				</ScrollView>
			</View>
		</View>
	</ResourcesScreen>
);
