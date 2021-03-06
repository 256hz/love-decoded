import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Screens } from 'route/enums';
import BackArrow from '@assets/svg/back-arrow.svg';
import NextArrow from '@assets/svg/next-arrow.svg';
import { pauseAudio, resetAudioPlayer } from '@redux/action';
import styles from './NavButtons.styles';

interface Props {
	backEnabled?: boolean;
	backNavigationDisabled?: boolean;
	backTarget?: Screens;
	backTitle?: string;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	nextTarget?: Screens;
	nextTitle?: string;
	nextEnabled?: boolean;
	onPressBack?: (arg?: any) => void;
	onPressNext?: (arg?: any) => void;
}

export default ({
	backNavigationDisabled,
	backEnabled,
	backTarget,
	backTitle = 'Back',
	hideBackButton,
	hideNextButton,
	nextTarget,
	nextTitle = 'Next',
	nextEnabled,
	onPressBack,
	onPressNext,
}: Props) => {
	const dispatch = useDispatch();
	const { navigate, goBack, canGoBack } = useNavigation();

	const nextIsEnabled = nextTarget !== undefined && nextEnabled;
	const backDisabled = !backNavigationDisabled && (!backEnabled || !canGoBack());

	const onBack = () => {
		onPressBack?.();
		dispatch(resetAudioPlayer(true, 'onBack'));
		if (backNavigationDisabled) {
			return;
		}

		backTarget
			? navigate(backTarget)
			: canGoBack() && goBack();
	};

	const onNext = () => {
		onPressNext?.();
		dispatch(pauseAudio());
		dispatch(resetAudioPlayer(true, 'onNext'));
		navigate(nextTarget!);
	};

	return (
		<View style={styles.container}>
			{
				hideBackButton
					? <View />
					: (
						<TouchableOpacity
							onPress={onBack}
							disabled={!canGoBack()}
						>
							<View style={[
								styles.navButton,
								backDisabled && styles.disabled,
							]}>
								{ backTitle === 'Back' && <BackArrow /> }

								<Text style={styles.text}>{backTitle}</Text>
							</View>
						</TouchableOpacity>
					)
			}

			{
				hideNextButton
					? <View />
					: (
						<TouchableOpacity
							onPress={onNext}
							disabled={!nextIsEnabled}
						>
							<View style={[
								styles.navButton,
								!nextIsEnabled && styles.disabled,
							]}>
								<Text style={styles.text}>{nextTitle}</Text>

								{ nextTitle === 'Next' && <NextArrow /> }
							</View>
						</TouchableOpacity>
					)
			}
		</View>
	);
};
