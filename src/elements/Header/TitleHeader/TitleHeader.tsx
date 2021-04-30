import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import styles, { PROGRESS_DOT_WIDTH, PROGRESS_WIDTH } from './TitleHeader.styles';

type Props = {
	activeProgressDot?: number;
	subtitle?: string;
	title: string;
	totalProgressDots?: number;
};

export default ({ title, subtitle, activeProgressDot, totalProgressDots }: Props) => {
	console.log({ subtitle });
	return (
		<View style={styles.headerContainer}>
			<ProgressDots activeProgressDot={activeProgressDot} totalProgressDots={totalProgressDots} />

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

const getDotsArray = (dots: number) => Array.from(Array(dots).keys());

const ProgressDots = ({ activeProgressDot, totalProgressDots }) =>
	activeProgressDot != undefined && totalProgressDots
		? (
			<View style={styles.progressBar}>
				<View style={styles.progressContainer}>
					<View style={styles.progressLine} />

					{ getDotsArray(totalProgressDots).map(i => {
						const dotLeftMargin = i * ((PROGRESS_WIDTH - PROGRESS_DOT_WIDTH) / (totalProgressDots - 1));

						return (
							<Fragment key={i}>
								<ProgressDot
									active={i === activeProgressDot}
									style={{ left: dotLeftMargin }}
								/>
							</Fragment>
						);
					})}
				</View>
			</View>
		)
		: null;

const ProgressDot = ({ active, style }) => (
	<View style={[ styles.progressDotContainer, style ]}>
		<View style={[ styles.progressDot, active && styles.active ]} />
	</View>
);
