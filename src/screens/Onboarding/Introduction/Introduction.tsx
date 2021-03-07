import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';
import { useNavigation } from '@react-navigation/native';
import { resetAudioPlayer } from 'redux/action';
import { useDispatch } from 'react-redux';
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
	const [ nextDisabled, setNextDisabled ] = useState(true);
	const onPress = () => {
		navigate(OnboardingScreens.AcknowledgingYourPast);
		dispatch(resetAudioPlayer(true, 'introduction-onNext'));
	};

	useEffect(() => {
		dispatch(resetAudioPlayer(true, 'introduction'));
	}, [ dispatch ]);

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
			scrollDisabled={true}
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
