import React, {
	ReactChild,
	useEffect,
	useRef,
	useState,
} from 'react';
import { View } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import { Screens } from 'route/OnboardingStack';
import AudioPlayerBar from './AudioPlayerBar';
import styles from './AudioPlayerNavigator.styles';
import NavButtons from './NavButtons';

export type AudioPlayerNavigatorProps = AudioPlayerNavigatorStandard | AudioPlayerNavigatorCustomButtons;

type AudioPlayerNavigatorStandard = {
	audioFilename?: string;
	customButtons?: undefined;
	backTarget?: Screens;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	onNextCallback?: (arg?: any) => void;
	nextTarget: Screens;
	nextEnabled?: boolean;
};

// If custom buttons are passed in, the props for the Back & Next buttons should not be.
type AudioPlayerNavigatorCustomButtons = {
	audioFilename?: string;
	backTarget?: undefined;
	customButtons: ReactChild;
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
	onNextCallback,
	nextEnabled,
	nextTarget,
}: AudioPlayerNavigatorProps) => {
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ currentTime, setCurrentTime ] = useState(0);
	// The user won't be able to fast forward past the latest time they've listened to.
	const totalListened = useRef(0);
	const [ duration, setDuration ] = useState(0);

	// Holds the handle for the setInterval that gets position in the audio file.
	const getInfoTimer = useRef<number>();

	// SoundPlayer event listener. Starts checking the current time for changes on load.
	const onFinishLoad = useRef(SoundPlayer.addEventListener('FinishedLoadingFile', ({ success }) => {
		if (!success) {
			console.error('error loading audio file');
			return;
		}

		setIsLoaded(true);
		setIsPlaying(true);
		SoundPlayer.play();

		if (!getInfoTimer.current) {
			getInfoTimer.current = setInterval(async () => {
				await getInfo();
			}, 33.33);
		}
	}));

	// SoundPlayer event listener. Pauses at the very end of the file so it won't auto-rewind.
	const onFinishPlay = useRef(SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
		if (!success) {
			console.error('error playing audio file');
			return;
		}

		SoundPlayer.pause();
		setIsPlaying(false);
	}));

	const getInfo = async () => {
		try {
			const { duration: newDuration, currentTime: newCurrentTime } = await SoundPlayer.getInfo();

			setCurrentTime(() => newCurrentTime);
			setDuration(() => newDuration);

			if (newCurrentTime > totalListened.current) {
				totalListened.current = newCurrentTime;
			}
		} catch (e) {
			console.error('could not get audio info', e);
		}
	};

	const rewind = () => {
		SoundPlayer.seek(Math.max(currentTime - 10, 0));
	};

	const fastForward = () => {
		console.log({ currentTime, totalListened });
		if (currentTime >= totalListened.current) {
			return;
		}

		SoundPlayer.seek(Math.min(currentTime + 10, totalListened.current, duration - 0.1));
	};

	const togglePause = () => {
		if (!isLoaded) {
			return;
		}

		if (isPlaying) {
			SoundPlayer.pause();
			setIsPlaying(false);
		} else {
			SoundPlayer.play();
			setIsPlaying(true);
		}
	};

	useEffect(() => {
		if (!audioFilename) {
			return;
		}

		SoundPlayer.loadSoundFile(...audioFilename.split('.'));

		return (() => {
			clearInterval(getInfoTimer.current || 0);
			onFinishLoad.current.remove();
			onFinishLoad.current = undefined;
			onFinishPlay.current.remove();
			onFinishPlay.current = undefined;
		});
	}, [ onFinishLoad, audioFilename ]);

	const playedToEnd = duration && totalListened.current >= duration - 0.1;

	const allowNextButton = nextEnabled != undefined
		? nextEnabled && (playedToEnd || __DEV__)
		: playedToEnd || __DEV__;

	return (
		<View style={[ styles.container, { height: audioFilename ? 220 : 150 } ]}>
			{ audioFilename
				? (
					<AudioPlayerBar
						onRewind={rewind}
						onFastForward={fastForward}
						onTogglePause={togglePause}
						isPlaying={isPlaying}
						isLoaded={isLoaded}
						currentTime={currentTime}
						duration={duration}
					/>
				)
				: <View />
			}

			{ customButtons || (
				<NavButtons
					backTarget={backTarget}
					hideBackButton={hideBackButton}
					hideNextButton={hideNextButton}
					onNextCallback={onNextCallback}
					nextEnabled={allowNextButton}
					nextTarget={nextTarget!}
				/>
			)}
		</View>
	);
};
