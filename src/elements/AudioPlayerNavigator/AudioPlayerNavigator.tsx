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
	nextTarget?: undefined;
	nextEnabled?: undefined;
	onNextCallback?: undefined;
};

export default ({
	audioFilename = 'music128.mp3',
	backTarget,
	customButtons,
	hideBackButton,
	onNextCallback,
	nextEnabled,
	nextTarget,
}: AudioPlayerNavigatorProps) => {
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ currentTime, setCurrentTime ] = useState(0);
	const [ duration, setDuration ] = useState(0);
	const [ playedToEnd, setPlayedToEnd ] = useState(false);

	// Holds the handle for the setInterval that gets position in the audio file.
	const getInfoTimer = useRef<number>();

	// SoundPlayer event listener. Starts checking the current time for changes on load.
	const onFinishLoad = useRef(SoundPlayer.addEventListener('FinishedLoadingFile', ({ success }) => {
		if (!success) {
			console.error('error loading audio file');
			return;
		}

		setIsLoaded(true);
		if (!getInfoTimer.current) {
			getInfoTimer.current = setInterval(async () => {
				await getInfo();
			}, 100);
		}
	}));

	// SoundPlayer event listener. Pauses at the very end of the file so it won't auto-rewind.
	const onFinishPlay = useRef(SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
		if (!success) {
			console.error('error playing audio file');
			return;
		}

		SoundPlayer.pause();
		SoundPlayer.seek(duration - 0.1);
		setIsPlaying(false);
		setPlayedToEnd(true);
	}));

	const getInfo = async () => {
		try {
			const { duration: newDuration, currentTime: newCurrentTime } = await SoundPlayer.getInfo();
			setDuration(newDuration);
			setCurrentTime(newCurrentTime);
		} catch (e) {
			console.error('could not get audio info', e);
		}
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
		SoundPlayer.loadSoundFile(...audioFilename.split('.'));

		return (() => {
			clearInterval(getInfoTimer.current || 0);
			onFinishLoad.current.remove();
			onFinishLoad.current = undefined;
			onFinishPlay.current.remove();
			onFinishPlay.current = undefined;
		});
	}, [ onFinishLoad, audioFilename ]);

	const nextIsEnabled = nextEnabled != undefined
		? nextEnabled && (playedToEnd || __DEV__)
		: playedToEnd || __DEV__;

	return (
		<View style={styles.container}>
			{ audioFilename && (
				<AudioPlayerBar
					onTogglePause={togglePause}
					isPlaying={isPlaying}
					isLoaded={isLoaded}
					currentTime={currentTime}
					duration={duration}
				/>
			)}

			{ customButtons || (
				<NavButtons
					backTarget={backTarget}
					hideBackButton={hideBackButton}
					onNextCallback={onNextCallback}
					nextEnabled={nextIsEnabled}
					nextTarget={nextTarget!}
				/>
			)}
		</View>
	);
};
