import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import ResourcesScreen from 'screens/Courses/Common/ResourcesScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { openWebLink } from 'util/linking';
import { Course1Step2Screens } from 'route/Steps/Course1Screens';
import styles from './Resources1.styles';

export default ({ navigation }) => {
	const { navigate } = useNavigation();

	const nlpLink = 'https://docs.google.com/document/d/1eVj_rxitM0B2RHzFhFoyaooeNfHB2Gzmk1R6_oC_-F0/edit?usp=sharing';

	return (
		<ResourcesScreen
			hideBackButton
			navigation={navigation}
			scrollDisabled
		>
			<View style={styles.container}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitleText}>
						Here are some resouces designed to help you self-talk positvely.
					</Text>
				</View>

				<TouchableOpacity onPress={() => openWebLink(nlpLink)}>
					<View style={styles.button}>
						<Text style={styles.subtitleText}>
							The NLP Communication Model
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigate(Course1Step2Screens.Resources2)}>
					<View style={styles.button}>
						<Text style={styles.subtitleText}>
							Self - Talk Awareness
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ResourcesScreen>
	);
};
