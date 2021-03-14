import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingScreens, StepScreens } from 'route/enums';
import BackArrow from '@assets/svg/back-arrow.svg';
import NextArrow from '@assets/svg/next-arrow.svg';
import { resetAudioPlayer } from '@redux/action';
import styles from './NavButtons.styles';

interface Props {
	backEnabled?: boolean;
	backTarget?: OnboardingScreens | StepScreens;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	nextTarget: OnboardingScreens | StepScreens;
	nextEnabled: boolean;
	onPressBack?: (arg?: any) => void;
	onPressNext?: (arg?: any) => void;
}

export default ({
	backEnabled,
	backTarget,
	hideBackButton,
	hideNextButton,
	nextTarget,
	nextEnabled,
	onPressBack,
	onPressNext,
}: Props) => {
	const dispatch = useDispatch();
	const { navigate, goBack, canGoBack } = useNavigation();
	const nextIsEnabled = nextTarget && nextEnabled;

	const onBack = () => {
		onPressBack?.();
		dispatch(resetAudioPlayer(true, 'onBack'));
		backTarget
			? navigate(backTarget)
			: canGoBack() && goBack();
	};

	const onNext = () => {
		onPressNext?.();
		dispatch(resetAudioPlayer(true, 'onNext'));
		navigate(nextTarget);
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
								(!backEnabled || !canGoBack()) && styles.disabled,
							]}>
								<BackArrow />
								<Text style={styles.text}>Back</Text>
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
								<Text style={styles.text}>Next</Text>
								<NextArrow />
							</View>
						</TouchableOpacity>
					)
			}
		</View>
	);
};
