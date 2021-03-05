import React, {
	ReactChild,
	useEffect,
} from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OnboardingScreens } from 'route/enums';
import {
	// fastForwardAudio,
	playAudioFile,
	pauseAudio,
	playAudio,
	resetAudioPlayer,
	// rewindAudio,
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
	// allowed
	audioFilename?: string;
	backEnabled?: boolean;
	backTarget?: OnboardingScreens;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	onAudioEnd?: (arg?: any) => void;
	onPressBack?: (arg?: any) => void;
	onPressNext?: (arg?: any) => void;
	nextTarget: OnboardingScreens;
	nextEnabled?: boolean;
	// disallowed
	customButtons?: undefined;
};

// If custom buttons are passed in, the props for the Back & Next buttons should not be.
type AudioPlayerNavigatorCustomButtons = {
	// allowed
	audioFilename?: string;
	customButtons: ReactChild;
	onAudioEnd?: (arg?: any) => void;
	// disallowed
	backEnabled?: undefined;
	backTarget?: undefined;
	hideBackButton?: undefined;
	hideNextButton?: undefined;
	nextTarget?: undefined;
	nextEnabled?: undefined;
	onPressNext?: undefined;
	onPressBack?: undefined;
};

export default ({
	audioFilename,
	backEnabled = true,
	backTarget,
	customButtons,
	hideBackButton,
	hideNextButton,
	onAudioEnd,
	onPressBack,
	onPressNext,
	nextEnabled,
	nextTarget,
}: AudioPlayerNavigatorProps) => {
	const dispatch = useDispatch();

	const { currentTime, duration } = useSelector(getAudioInfo);
	const isLoaded = useSelector(isAudioLoaded);
	const isPlaying = useSelector(isAudioPlaying);
	const playedToEnd = useSelector(getAudioPlayCompleted);

	// const fastForward = () => dispatch(fastForwardAudio());

	// const rewind = () => dispatch(rewindAudio());

	const togglePause = () => {
		dispatch(isPlaying ? pauseAudio() : playAudio());
	};

	useEffect(() => {
		if (!audioFilename) {
			return;
		}

		if (!playedToEnd && currentTime === 0) {
			const [ filename, extension ] = audioFilename.split('.');
			dispatch(playAudioFile(filename, extension));
			return;
		}

		console.log('onAudioEnd');
		onAudioEnd?.();
	}, [ audioFilename, playedToEnd, dispatch, onAudioEnd ]);

	const isNextEnabled = (() => {
		if (nextEnabled === undefined && audioFilename === undefined) {
			return true;
		}

		if (nextEnabled === undefined && audioFilename !== undefined) {
			return playedToEnd;
		}

		if (nextEnabled !== undefined && audioFilename === undefined) {
			return nextEnabled;
		}

		if (nextEnabled !== undefined && audioFilename !== undefined) {
			return nextEnabled && playedToEnd;
		}
	})();

	return (
		<View style={[
			styles.container,
			// audioFilename ? styles.withAudioBar : styles.withoutAudioBar,
		]}>
			{ audioFilename
				? (
					<AudioPlayerBar
						currentTime={currentTime}
						duration={duration}
						isPlaying={isPlaying}
						isLoaded={isLoaded}
						// onFastForward={fastForward}
						// onRewind={rewind}
						onTogglePause={togglePause}
					/>
				)
				: <View />
			}

			<View style={styles.bottomContainer}>
				{ customButtons || (
					<NavButtons
						backEnabled={backEnabled}
						backTarget={backTarget}
						hideBackButton={hideBackButton}
						hideNextButton={hideNextButton}
						onPressBack={onPressBack}
						onPressNext={onPressNext}
						// nextEnabled={isNextEnabled}
						nextEnabled={true}
						nextTarget={nextTarget!}
					/>
				)}
			</View>
		</View>
	);
};
