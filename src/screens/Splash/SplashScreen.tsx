import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Spinner } from 'react-native-material-kit';
import Logo from '@assets/svg/logo.svg';
import SoundPlayer from 'react-native-sound-player';
import { RootStacks } from 'route/enums';
import { BackgroundFade } from '@elements/OnboardingScreen/BackgroundFade';
import colors from 'elements/globalStyles/color';
import { resetAudioPlayer } from '@redux/action';
import { resetRoot } from '@util/navigation';
import styles from './SplashScreen.styles';

type Props = {
	destination: RootStacks;
};

export default ({ destination }: Props) => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		// load an empty sound to initialize the Android media player
		try {
			SoundPlayer.loadSoundFile('one_second_silence', 'mp3');
		} catch (error) {
			console.error(error);
		}

		const nextTimeout = setTimeout(() => {
			dispatch(resetAudioPlayer(true, 'splash'));
			resetRoot(destination);
		}, 2000);

		return () => clearTimeout(nextTimeout);
	}, [ dispatch, destination, navigate ]);

	return (
		<View style={styles.container}>
			<BackgroundFade drawShapes={[ 14, 15, 16 ]}>
				<View style={styles.spinnerContainer}>
					<Logo />
					<Spinner style={styles.spinner} strokeColor={colors.RedTransparent} />
				</View>
			</BackgroundFade>
		</View>
	);
};
