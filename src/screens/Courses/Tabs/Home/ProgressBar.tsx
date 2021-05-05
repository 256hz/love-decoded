import colors from '@elements/globalStyles/color';
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Home.styles';

export default ({ progressPercent }: { progressPercent: number }) => (
	<View style={styles.progressBarContainer}>
		<View style={styles.emptyProgressBar} />

		<View style={styles.filledProgressContainer}>
			<View style={[ styles.progress, {
				width: progressPercent ? `${progressPercent}%` : 5,
				borderTopRightRadius: progressPercent < 100 ? 0 : 6,
				borderBottomRightRadius: progressPercent < 100 ? 0 : 6,
			} ]} />

			{ progressPercent > 0 && progressPercent < 100
				? <LinearGradient
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					colors={[ colors.Orange, colors.OrangeFullTransparent ]}
					style={styles.progressGradient}
				/>
				: null
			}
		</View>
	</View>
);
