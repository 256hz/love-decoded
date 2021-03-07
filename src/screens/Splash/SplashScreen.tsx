import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Spinner } from 'react-native-material-kit';
import Logo from '@assets/svg/logo.svg';
import SoundPlayer from 'react-native-sound-player';
import { OnboardingScreens } from 'route/enums';
import { BackgroundFade } from '@elements/OnboardingScreen/BackgroundFade';
import colors from 'elements/globalStyles/color';
import { resetAudioPlayer } from 'redux/action';
import styles from './SplashScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		// load an empty sound here so the Android media player initializes before we play
		try {
			SoundPlayer.loadSoundFile('one_second_silence', 'mp3');
		} catch (error) {
			console.error(error);
		}

		const nextTimeout = setTimeout(() => {
			dispatch(resetAudioPlayer(true, 'splash'));
			navigate(OnboardingScreens.Introduction);
		}, 3000);

		return () => clearTimeout(nextTimeout);
	}, [ dispatch, navigate ]);

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
