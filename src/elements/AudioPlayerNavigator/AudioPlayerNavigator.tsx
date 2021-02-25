import React, {
	ReactChild,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Platform, View } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import { Screens } from 'route/OnboardingStack';
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

const CURRENT_TIME_DOT_UPDATE_FPS = Platform.select({ ios: 30, android: __DEV__ ? 1 : 10, default: 1 });

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
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ currentTime, setCurrentTime ] = useState(0);
	const [ duration, setDuration ] = useState(0);

	// const isPlaying = useRef(false);
	// The user won't be able to fast forward past the latest time they've listened to.
	const totalListened = useRef(0);
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
		toggleGetInfoTimer();
	}));

	const toggleGetInfoTimer = () => {
		console.log('toggle', getInfoTimer);
		if (getInfoTimer.current) {
			clearInterval(getInfoTimer.current);
			getInfoTimer.current = undefined;
			return;
		}

		getInfoTimer.current = setInterval(async () => {
			await getInfo();
		}, 1000 / CURRENT_TIME_DOT_UPDATE_FPS);
	};

	// SoundPlayer event listener. Pauses at the very end of the file so it won't auto-rewind.
	const onFinishPlay = useRef(SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
		if (!success) {
			console.error('error playing audio file');
			return;
		}

		togglePause();
		onAudioEnd?.();
	}));

	const getInfo = async () => {
		try {
			const { duration: newDuration, currentTime: newCurrentTime } = await SoundPlayer.getInfo();
			console.log(newCurrentTime);

			setCurrentTime(newCurrentTime);
			setDuration(newDuration);

			if (newCurrentTime > totalListened.current) {
				totalListened.current = newCurrentTime;
			}
		} catch (e) {
			console.error('could not get audio info', e);
		}
	};

	const rewind = () => {
		SoundPlayer.seek(Math.max(currentTime - 10, 0));
		getInfo();
	};

	const fastForward = () => {
		if (__DEV__) {
			SoundPlayer.seek(Math.min(currentTime + 10, duration - 0.1));
			getInfo();
			return;
		}

		SoundPlayer.seek(Math.min(currentTime + 10, totalListened.current, duration - 0.1));
		getInfo();
	};

	const togglePause = () => {
		if (!isLoaded) {
			return;
		}
		getInfo();

		if (isPlaying) {
			SoundPlayer.pause();
			setIsPlaying(false);
		} else {
			SoundPlayer.play();
			setIsPlaying(true);
		}
		toggleGetInfoTimer();
		console.log({ isPlaying, getInfoTimer });
	};

	useEffect(() => {
		if (!audioFilename) {
			return;
		}

		// loadSoundFile takes [ 'filename', 'mp3' ]
		SoundPlayer.loadSoundFile(...audioFilename.split('.'));

		return (() => {
			!!getInfoTimer.current && clearInterval(getInfoTimer.current);
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
