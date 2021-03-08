import React from 'react';
import { Text, View } from 'react-native';
import ClockCircle from '@assets/svg/clock-circle.svg';
import ClockHands from '@assets/svg/clock-hands.svg';
import styles from './ActivityCard.styles';

type Props = {
	title: string;
	subtitle: string;
	active?: boolean;
	completed?: boolean;
};

export default ({ title, subtitle, active, completed }: Props) => (
	<View style={styles.container}>
		<View style={styles.topContainer}>
			<View>
				<View style={styles.topSquare} />
				<View>
					<Text style={styles.cardTitleText}>
						{title}
					</Text>
					<View style={styles.subtitleContainer}>
						<Clock />
						<Text style={styles.subtitleText}>
							{subtitle}
						</Text>
					</View>
				</View>
			</View>

			<View style={[ styles.circle, completed && styles.fillActive ]} />
		</View>

		<View style={[ styles.emptyProgressBar, active && styles.fillActive ]} />
	</View>
);

const Clock = () => (
	<View style={styles.clockContainer}>
		<ClockCircle />
		<View style={styles.clockHands}>
			<ClockHands />
		</View>
	</View>
);
