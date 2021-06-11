import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RightArrow from '@assets/svg/right-arrow.svg';
import styles from './FaqQuestion.styles';

export default ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						{text}
					</Text>
				</View>

				<View style={styles.arrowContainer}>
					<RightArrow />
				</View>
			</View>
		</TouchableOpacity>
	);
};
