import React, {
	ReactChild,
	useEffect,
} from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Screens } from 'route/enums';
import {
	fastForwardAudio,
	loadAudioFile,
	pauseAudio,
	playAudio,
	resetAudioPlayer,
	rewindAudio,
} from '@redux/action';
import {
	getAudioInfo,
	getAudioPlayCompleted,
	isAudioLoaded,
	isAudioPlaying,
} from '@redux/selector';
import AudioPlayerBar from './AudioPlayerBar';
import NavButtons from './NavButtons';
import styles from './AudioPlayerNavigator.styles';

export type AudioPlayerNavigatorProps = AudioPlayerNavigatorStandard | AudioPlayerNavigatorCustomButtons;

type AudioPlayerNavigatorStandard = {
	audioFilename?: string;
	customButtons?: undefined;
	backTarget?: Screens;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	onAudioEnd?: (arg?: any) => void;
	onNextCallback?: (arg?: any) => void;
	nextTarget: Screens;
	nextEnabled?: boolean;
};

// If custom buttons are passed in, the props for the Back & Next buttons should not be.
type AudioPlayerNavigatorCustomButtons = {
	// allowed
	audioFilename?: string;
	customButtons: ReactChild;
	onAudioEnd?: (arg?: any) => void;
	// disallowed
	backTarget?: undefined;
	hideBackButton?: undefined;
	hideNextButton?: undefined;
	nextTarget?: undefined;
	nextEnabled?: undefined;
	onNextCallback?: undefined;
};

export default ({
	audioFilename,
	backTarget,
	customButtons,
	hideBackButton,
	hideNextButton,
	onAudioEnd,
	onNextCallback,
	nextEnabled,
	nextTarget,
}: AudioPlayerNavigatorProps) => {
	const dispatch = useDispatch();

	const { currentTime, duration } = useSelector(getAudioInfo);
	const isLoaded = useSelector(isAudioLoaded);
	const isPlaying = useSelector(isAudioPlaying);
	const playedToEnd = useSelector(getAudioPlayCompleted);

	const fastForward = () => dispatch(fastForwardAudio());

	const rewind = () => dispatch(rewindAudio());

	const togglePause = () => {
		dispatch(isPlaying ? pauseAudio() : playAudio());
	};

	useEffect(() => {
		dispatch(resetAudioPlayer());

		if (!audioFilename) {
			return;
		}

		const [ filename, extension ] = audioFilename.split('.');
		dispatch(loadAudioFile(filename, extension));
	}, [ audioFilename, dispatch ]);

	useEffect(() => {
		if (playedToEnd) {
			onAudioEnd?.();
		}
	}, [ playedToEnd ]);

	const wrapOnNext = () => {
		dispatch(pauseAudio());
		dispatch(resetAudioPlayer());
		onNextCallback?.();
	};

	const allowNextButton = nextEnabled != undefined
		? nextEnabled && playedToEnd
		: playedToEnd;

	return (
		<View style={[ styles.container, audioFilename ? styles.withAudioBar : styles.withoutAudioBar ]}>
			{ audioFilename
				? (
					<AudioPlayerBar
						currentTime={currentTime}
						duration={duration}
						isPlaying={isPlaying}
						isLoaded={isLoaded}
						onFastForward={fastForward}
						onRewind={rewind}
						onTogglePause={togglePause}
					/>
				)
				: <View />
			}

			<View style={styles.bottomContainer}>
				{ customButtons || (
					<NavButtons
						backTarget={backTarget}
						hideBackButton={hideBackButton}
						hideNextButton={hideNextButton}
						onNextCallback={wrapOnNext}
						nextEnabled={allowNextButton}
						nextTarget={nextTarget!}
					/>
				)}
			</View>
		</View>
	);
};
