import React from 'react';
import { Text, View } from 'react-native';
import ClockCircle from '@assets/svg/clock-circle.svg';
import ClockHands from '@assets/svg/clock-hands.svg';
import styles from './ActivityCard.styles';
import { ActivityStatus } from '../DayOverview';

type Props = {
	title: string;
	subtitle: string;
	status: ActivityStatus;
};

export default ({ title, subtitle, status }: Props) => {
	return (
		<View style={[ styles.container, styles[`${status}Container`] ]}>

			<View style={styles.topContainer}>

				<View style={styles.topInnerContainer}>
					<View style={[ styles.topSquare, styles[`${status}TopSquare`] ]} />

					<View>
						<Text style={[ styles.cardTitleText, styles[`${status}CardTitleText`] ]}>
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

				<View style={[ styles.circle, styles[`${status}Circle`] ]} />

			</View>

			<View style={[ styles.progressBar, styles[`${status}ProgressBar`] ]} />
		</View>
	);
};

const Clock = () => (
	<View style={styles.clockContainer}>
		<ClockCircle />
		<View style={styles.clockHands}>
			<ClockHands />
		</View>
	</View>
);
