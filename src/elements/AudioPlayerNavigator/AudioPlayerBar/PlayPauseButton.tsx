import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';
import { Spinner } from 'react-native-material-kit';
import PlayButton from '@assets/svg/play-button.svg';
import colors from '@elements/globalStyles/color';
import styles from './AudioPlayerBar.styles';

interface Props {
	isLoaded: boolean;
	isPlaying: boolean;
}

const HIDE_FOR_MS = 500;
const SHOW_FOR_MS = 600;

export default ({ isLoaded, isPlaying }: Props) => {
	const isFocused = useIsFocused();

	const hideButtonTimeout = useRef(-1);
	const showButtonTimeout = useRef(-1);
	const isBlinking = useRef(false);

	const [ hidePlay, setHidePlay ] = useState(false);

	const hide = useCallback(() => {
		if (!isFocused) {
			clearTimeout(hideButtonTimeout.current);
			return;
		}

		if (isPlaying) {
			isBlinking.current = false;
			setHidePlay(false);
			clearTimeout(hideButtonTimeout.current);
			return;
		}

		setHidePlay(true);

		showButtonTimeout.current = setTimeout(() => {
			if (!isFocused) {
				clearTimeout(showButtonTimeout.current);
				clearTimeout(hideButtonTimeout.current);
				return;
			}

			setHidePlay(false);

			!isPlaying && isBlinking.current && (
				hideButtonTimeout.current = setTimeout(() => {
					hide();
				}, SHOW_FOR_MS)
			);

		}, HIDE_FOR_MS);

		return (() => {
			clearTimeout(showButtonTimeout.current);
			clearTimeout(hideButtonTimeout.current);
		});
	}, [ isPlaying, isFocused ]);

	useEffect(() => {
		if (!isFocused) {
			clearTimeout(showButtonTimeout.current);
			clearTimeout(hideButtonTimeout.current);
		}

		if (!isPlaying && !isBlinking.current) {
			isBlinking.current = true;
			hide();
			return;
		}

		if (isPlaying && isBlinking.current) {
			setHidePlay(false);
			isBlinking.current = false;
			clearTimeout(showButtonTimeout.current);
			clearTimeout(hideButtonTimeout.current);
		}
	}, [ isPlaying, hide, isFocused ]);

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
