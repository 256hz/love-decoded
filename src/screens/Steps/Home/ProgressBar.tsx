import React from 'react';
import { View } from 'react-native';
import styles from './Home.styles';

export default ({ progressPercent }: { progressPercent: number }) => (
	<View style={styles.progressBarContainer}>
		<View style={styles.emptyProgressBar} />
		<View style={[ styles.progress, {
			width: `${progressPercent || 2}%`,
			borderTopRightRadius: progressPercent < 100 ? 0 : 6,
			borderBottomRightRadius: progressPercent < 100 ? 0 : 6,
		} ]} />
	</View>
);
