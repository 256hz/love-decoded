import React, {
	ReactChild,
	useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { OnboardingScreens, Screens, Course1Step1Screens } from 'route/enums';
import {
	loadAudioFile,
	pauseAudio,
	playAudio,
} from '@redux/action';
import {
	getAudioInfo,
	isAudioLoaded,
	isAudioPlayedToEndOnScreen,
	isAudioPlaying,
} from '@redux/selector';
import { DEMO_MODE } from '@App';
import AudioPlayerBar from './AudioPlayerBar';
import NavButtons from './NavButtons';
import styles from './AudioPlayerNavigator.styles';

export type AudioPlayerNavigatorProps = AudioPlayerNavigatorStandard | AudioPlayerNavigatorCustomButtons;

type AudioPlayerNavigatorStandard = {
	// allowed
	audioFilename?: string;
	backEnabled?: boolean;
	backTarget?: Screens;
	customMiddleContent?: ReactChild;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	onAudioEnd?: (arg?: any) => void;
	onPressBack?: (arg?: any) => void;
	onPressNext?: (arg?: any) => void;
	nextTarget: Screens;
	nextEnabled?: boolean;
	// disallowed
	customButtons?: undefined;
};

// If custom buttons are passed in, the props for the Back & Next buttons should not be.
type AudioPlayerNavigatorCustomButtons = {
	// allowed
	audioFilename?: string;
	customMiddleContent?: ReactChild;
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
	customMiddleContent,
	hideBackButton,
	hideNextButton,
	onAudioEnd,
	onPressBack,
	onPressNext,
	nextEnabled,
	nextTarget,
}: AudioPlayerNavigatorProps) => {
	const dispatch = useDispatch();
	const isFocused = useIsFocused();
	const { name } = useRoute();
	const route = name as Screens;

	const { currentTime, duration } = useSelector(getAudioInfo);
	const isLoaded = useSelector(isAudioLoaded);
	const isPlaying = useSelector(isAudioPlaying);
	const playedToEnd = useSelector(isAudioPlayedToEndOnScreen(route));

	// Text under button while disabled: "You must listen to the audio to press Next"

	const togglePause = () => {
		dispatch(isPlaying ? pauseAudio() : playAudio());
	};

	useEffect(() => {
		if (!isFocused || !audioFilename) {
			return;
		}

		if (!isPlaying && currentTime === 0) {
			dispatch(loadAudioFile(audioFilename));
			return;
		}

		if (playedToEnd && !isPlaying) {
			onAudioEnd?.() && console.log('onAudioEnd');
		}
	}, [
		audioFilename,
		currentTime,
		dispatch,
		isFocused,
		isPlaying,
		onAudioEnd,
		playedToEnd,
		route,
	]);

	const isNextEnabled = (() => {
		if (DEMO_MODE) {
			return true;
		}

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

		return true;
	})();

	return (
		<View style={styles.container}>
			{ audioFilename
				? (
					<AudioPlayerBar
						currentTime={currentTime}
						duration={duration}
						isPlaying={isPlaying}
						isLoaded={isLoaded}
						onTogglePause={togglePause}
					/>
				)
				: <View />
			}

			<View style={styles.bottomContainer}>
				{ customMiddleContent }

				{ customButtons || (
					<NavButtons
						backEnabled={backEnabled}
						backTarget={backTarget}
						hideBackButton={hideBackButton}
						hideNextButton={hideNextButton}
						onPressBack={onPressBack}
						onPressNext={onPressNext}
						nextEnabled={isNextEnabled}
						nextTarget={nextTarget!}
					/>
				)}
			</View>
		</View>
	);
};
