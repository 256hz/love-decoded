import React from 'react';
import { View, Text } from 'react-native';
import styles from './Title.styles';

export default ({ title, subtitle }) => {
	return (
		(title || subtitle) && (
			<View style={styles.titleContainer}>
				{ title && (
					<Text style={styles.titleText}>{title}</Text>
				)}

				{ subtitle && (
					<Text style={styles.subtitleText}>{subtitle}</Text>
				)}
			</View>
		)
	);
};
