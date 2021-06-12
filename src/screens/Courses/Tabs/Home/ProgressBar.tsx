import colors from '@elements/globalStyles/color';
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, { PROGRESS_BAR_GRADIENT_WIDTH_PERCENT } from './Home.styles';

export default ({ progressPercent }: { progressPercent: number }) => {
	const progressBarWidth = progressPercent
		? `${progressPercent - PROGRESS_BAR_GRADIENT_WIDTH_PERCENT}%`
		: 5;

	return (
		<View style={styles.progressBarContainer}>
			<View style={styles.emptyProgressBar} />

			<View style={styles.filledProgressContainer}>
				<View style={[ styles.progress, { width: progressBarWidth } ]} />

				{ progressPercent && progressPercent < 100
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
};
