import React from 'react';
import { View, Text } from 'react-native';
import LeftArrow from '@assets/svg/left-arrow.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './FaqAnswer.styles';

export default ({ text, onBack }) => {
	return (
		<TouchableOpacity onPress={onBack}>
			<View style={styles.container}>
				<View style={styles.arrowContainer}>
					<LeftArrow />
				</View>

				<Text style={styles.text}>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
