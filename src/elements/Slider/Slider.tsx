import React from 'react';
import { Text, View } from 'react-native';
import { HowAreYouFeelingResponse } from '@redux/types/survey';
import Slider from 'rn-range-slider';
import styles from './Slider.styles';

const Rail = () => (
	<View style={styles.rail} />
);

const Thumb = () => (
	<View style={styles.thumb} />
);

const RailSelected = () => (
	<View style={styles.railSelected} />
);

type Props = {
	onValueChanged: () => void;
	value: HowAreYouFeelingResponse;
};

export default ({ onValueChanged, value }) => {
	const sliderLabels = Array.from({ length: 10 }, (_, i) => i + 1);

	return (
		<View style={styles.container}>
			<Slider
				disableRange
				onValueChanged={onValueChanged}
				low={value}
				min={1}
				max={10}
				step={1}
				renderRail={() => <Rail />}
				renderRailSelected={() => <RailSelected />}
				renderThumb={() => <Thumb />}
				style={styles.container}
			/>

			<View style={styles.labelContainer}>
				{
					sliderLabels.map(i => (
						<Text
							key={i}
							style={[ styles.labelText, {
								left: i < 10 ? i * 0.52 : 0,
							} ]}
						>
							{i}
						</Text>
					))
				}
			</View>
		</View>
	);
};
