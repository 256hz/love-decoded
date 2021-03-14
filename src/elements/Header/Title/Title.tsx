import React from 'react';
import { View, Text } from 'react-native';
import styles, { PROGRESS_WIDTH } from './Title.styles';

type Props = {
	title?: string;
	subtitle?: string;
	totalProgressDots?: number;
	activeProgressDot?: number;
};

export default ({ title, subtitle, activeProgressDot, totalProgressDots }: Props) => {
	return (
		<View style={styles.titleContainer}>
			{ activeProgressDot && totalProgressDots && (
				<View style={styles.progressContainer}>
					<View style={styles.progressLine} />
					{ new Array(totalProgressDots).fill(0).map((_, i) => (
						<>
							<ProgressDot active={i === activeProgressDot} />
							{ i < totalProgressDots - 1 && (
								<View style={{ height: '100%', width: PROGRESS_WIDTH / totalProgressDots - 16 }} />
							)}
						</>
					))}
				</View>
			)}
			{ title && (
				<Text style={styles.titleText}>
					{title}
				</Text>
			)}

			{ subtitle && (
				<Text style={styles.subtitleText}>
					{subtitle}
				</Text>
			)}
		</View>
	);
};

const ProgressDot = ({ active }) => (
	<View style={styles.progressDotContainer}>
		<View style={[ styles.progressDot, active && styles.active ]} />
	</View>
);
