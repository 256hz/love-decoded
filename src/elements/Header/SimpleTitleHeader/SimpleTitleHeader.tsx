import React from 'react';
import { Text, View } from 'react-native';
import styles from './SimpleTitleHeader.styles';

export default ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>
				{title}
			</Text>
		</View>
	);
};
