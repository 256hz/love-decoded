import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DEMO_MODE } from '@App';
import { OnboardingScreens } from 'route/enums';
import { OnboardingScreen } from '@elements';
import { resetAudioPlayer } from '@redux/action';
import styles from './Introduction.styles';

type EnterButtonProps = {
	onPress: () => void;
	disabled?: boolean;
};

const EnterButton = ({ onPress, disabled = false }: EnterButtonProps) => (
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<View style={styles.enterButtonContainer}>
			<View style={[ styles.enterButton, disabled && styles.disabled ]}>
				<Text style={styles.buttonText}>Enter</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	const [ nextDisabled, setNextDisabled ] = useState(DEMO_MODE);

	const onPress = () => {
		navigate(OnboardingScreens.AcknowledgingYourPast);
		dispatch(resetAudioPlayer(true, 'introduction-onNext'));
	};

	// Add text explaining audio will have to be finished to advance to next screen

	return (
		<OnboardingScreen
			audioFilename="onboarding_1_you_are_born_to_be_loved.mp3"
			customButtons={
				<EnterButton
					disabled={nextDisabled}
					onPress={onPress}
				/>
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
