import React from 'react';
import { Text, View } from 'react-native';
import ClockCircle from '@assets/svg/clock-circle.svg';
import ClockHands from '@assets/svg/clock-hands.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ActivityCard.styles';

export enum ActivityStatus {
	Complete = 'complete',
	Active = 'active',
	Future = 'future',
}

type Props = {
	onPress: () => void;
	title: string;
	subtitle: string;
	status: ActivityStatus;
};

export default ({ onPress, title, subtitle, status }: Props) => {
	return (
		<View style={styles.areaContainer}>
			{ status === ActivityStatus.Active && <View style={styles.activeLeftBorder} /> }
			<TouchableOpacity onPress={onPress} disabled={status !== ActivityStatus.Active}>
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
			</TouchableOpacity>
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
