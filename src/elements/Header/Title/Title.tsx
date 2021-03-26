import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import styles, { PROGRESS_WIDTH } from './Title.styles';

type Props = {
	title: string;
	subtitle?: string;
	totalProgressDots?: number;
	activeProgressDot?: number;
};

const getDotsArray = dots => Array.from(Array(dots).keys());

export default ({ title, subtitle, activeProgressDot, totalProgressDots }: Props) => {
	return (
		<View style={styles.headerContainer}>
			{ activeProgressDot != undefined && totalProgressDots
				? (
					<View style={styles.progressBar}>
						<View style={styles.progressContainer}>
							<View style={styles.progressLine} />
							{ getDotsArray(totalProgressDots).map(i => (
								<Fragment key={i}>
									<ProgressDot
										active={i === activeProgressDot}
										style={{ left: i * (PROGRESS_WIDTH / totalProgressDots + 8) }}
									/>
								</Fragment>
							))}
						</View>
					</View>
				)
				: null
			}

			<View style={[ styles.titleContainer, !!totalProgressDots && { paddingTop: 7 } ]}>
				<Text style={styles.titleText}>
					{title}
				</Text>

				{ subtitle ?
					(
						<Text style={styles.subtitleText}>
							{subtitle}
						</Text>
					)
					: null
				}
			</View>
		</View>
	);
};

const ProgressDot = ({ active, style }) => (
	<View style={[ styles.progressDotContainer, style ]}>
		<View style={[ styles.progressDot, active && styles.active ]} />
	</View>
);