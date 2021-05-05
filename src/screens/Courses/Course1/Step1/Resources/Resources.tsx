import React from 'react';
import { Text, View } from 'react-native';
import ResourcesScreen from 'screens/Courses/Common/ResourcesScreen';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Resources.styles';

const words = [
	'Accepting',
	'Accommodating',
	'Affectionate',
	'Affirming',
	'Agreeable',
	'Alluring',
	'Altruistic',
	'Ambitious',
	'Amiable',
	'Analytical',
	'Appreciative',
	'Articulate',
	'Assertive',
	'Attentive',
	'Authentic',
	'Balanced',
	'Candid',
	'Careful',
	'Caring',
	'Cheerful',
	'Comforting',
	'Communicative',
	'Compassionate',
	'Competent',
	'Congenial',
	'Conscientious',
	'Cooperative',
	'Courageous',
	'Creative',
	'Decisive',
	'Diplomatic',
	'Discreet',
	'Easy-Going',
	'Educated',
	'Effective',
	'Efficient',
	'Encouraging',
	'Enthusiastic',
	'Extroverted',
	'Flexible',
	'Forgiving',
	'Forthright',
	'Friendly',
	'Frugal',
	'Genuine',
	'Godly',
	'Graceful',
	'Growing',
	'Hard-Working',
	'Helpful',
	'Honest',
	'Humble',
	'Humorous',
	'Imaginative',
	'Industrious',
	'Insightful',
	'Intelligent',
	'Intuitive',
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
					This list of resouces is designed to help you recognize your loveable qualities.
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
