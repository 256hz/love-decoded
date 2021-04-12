import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Home.styles';

export default ({ onPress }: { onPress: () => void }) => (
	<View style={styles.buttonContainer}>
		<TouchableOpacity onPress={onPress}>
			<View style={styles.courseButton}>
				<Text style={styles.buttonText}>
					Go To Course
				</Text>
			</View>
		</TouchableOpacity>
	</View>
);
