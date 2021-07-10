import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
	Image, Text, View, ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DEMO_MODE } from '@util/demoMode';
import { OnboardingScreens, RootStacks } from 'route/enums';
import { OnboardingScreen } from '@elements';
import { resetAudioPlayer } from '@redux/action';
import styles from './Introduction.styles';

type EnterButtonProps = {
	onPress: () => void;
	disabled?: boolean;
	label: string;
	style?: ViewStyle;
};

const EnterButton = ({ onPress, disabled = false, style = {}, label }: EnterButtonProps) => (
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<View style={styles.enterButtonContainer}>
			<View style={[ styles.enterButton, disabled && styles.disabled, style ]}>
				<Text style={styles.buttonText}>{label}</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	const [ nextDisabled, setNextDisabled ] = useState(!DEMO_MODE);

	const onPressEnter = () => {
		navigate(OnboardingScreens.AcknowledgingYourPast);
		dispatch(resetAudioPlayer(true, 'introduction-onNext'));
	};

	const onPressLogin = () => {
		navigate(RootStacks.Login);
		dispatch(resetAudioPlayer(true, 'introduction-login'));
	};

	// Add text explaining audio will have to be finished to advance to next screen

	return (
		<OnboardingScreen
			audioFilename="onboarding_1_you_are_born_to_be_loved.mp3"
			customButtons={
				<View style={styles.enterButtonContainer}>
					<EnterButton
						disabled={nextDisabled}
						label="Enter"
						onPress={onPressEnter}
					/>

					<EnterButton
						disabled={false}
						label="Login"
						onPress={onPressLogin}
						style={styles.loginButton}
					/>
				</View>
			}
			drawShapes={[ 14, 15, 16 ]}
			onAudioEnd={() => setNextDisabled(false)}
			scrollDisabled
			showLogo
			title="You are Born to be Loved"
		>
			<View style={styles.container}>
				<Image
					source={require('@assets/png/hero-image.png')}
					style={styles.heroImage}
					resizeMode="contain"
				/>

				<View style={styles.subTitlesContainer}>
					<View style={[ styles.subTitleContainer, styles.subTitleLeft ]}>
						<Text style={styles.subTitleText}>
							We Know Your Pain
						</Text>
					</View>
					<View style={[ styles.subTitleContainer, styles.subTitleRight ]}>
						<Text style={styles.subTitleText}>
							Loving Self Will Heal It
						</Text>
					</View>
				</View>
			</View>
		</OnboardingScreen>
	);
};
