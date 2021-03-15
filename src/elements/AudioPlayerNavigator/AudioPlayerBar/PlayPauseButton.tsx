import React, {
	useCallback, useEffect, useRef, useState,
} from 'react';
import { View } from 'react-native';
import PlayButton from '@assets/svg/play-button.svg';
import { Spinner } from 'react-native-material-kit';
import colors from 'elements/globalStyles/color';
import styles from './AudioPlayerBar.styles';

interface Props {
	isLoaded: boolean;
	isPlaying: boolean;
}

const HIDE_FOR_MS = 500;
const SHOW_FOR_MS = 600;

export default ({ isLoaded, isPlaying }: Props) => {
	const [ hidePlay, setHidePlay ] = useState(false);

	const isBlinking = useRef(false);

	const hide = useCallback(() => {
		if (isPlaying) {
			isBlinking.current = false;
			setHidePlay(false);
			return;
		}

		setHidePlay(true);
		let hideButtonTimeout;
		const showButtonTimeout = setTimeout(() => {
			setHidePlay(false);

			!isPlaying && isBlinking.current && (
				hideButtonTimeout = setTimeout(() => {
					hide();
				}, SHOW_FOR_MS)
			);

		}, HIDE_FOR_MS);

		return (() => {
			clearTimeout(showButtonTimeout);
			clearTimeout(hideButtonTimeout);
		});
	}, [ isPlaying ]);

	useEffect(() => {
		if (!isPlaying && !isBlinking.current) {
			isBlinking.current = true;
			hide();
			return;
		}

		if (isPlaying && isBlinking.current) {
			setHidePlay(false);
			isBlinking.current = false;
		}
	}, [ isPlaying, hide ]);

	if (!isLoaded) {
		return (
			<View style={styles.playButtonContainer}>
				<Spinner
					style={styles.spinner}
					strokeColor={colors.GrayTransparent071}
				/>
			</View>
		);
	}

	return (
		<View style={styles.playButtonContainer}>
			{isPlaying
				? <Pause />
				: <Play hidePlay={hidePlay} />
			}
		</View>
	);
};

const Pause = () => (
	<View style={styles.pauseContainer}>
		<View style={styles.pauseLine} />
		<View style={styles.pauseLine} />
	</View>
);

const Play = ({ hidePlay } ) => (
	hidePlay
		? <View style={{ width: 16 }} />
		: <PlayButton />
);
