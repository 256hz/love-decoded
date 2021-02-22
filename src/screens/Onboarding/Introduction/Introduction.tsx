import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingScreen } from '@elements';
import { Screens } from 'route/OnboardingStack';
import { useNavigation } from '@react-navigation/native';
import styles from './Introduction.styles';

type EnterButtonProps = {
	onPress: () => void;
	disabled?: boolean;
};

const EnterButton = ({ onPress, disabled = false }: EnterButtonProps) => (
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<View style={styles.enterButtonContainer}>
			<View style={styles.enterButton}>
				<Text style={styles.buttonText}>Enter</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default () => {
	const { navigate } = useNavigation();

	return (
		<OnboardingScreen
			audioFilename="onboarding-1-you-are-born-to-be-loved.mp3"
			customButtons={
				<EnterButton onPress={() => navigate(Screens.AcknowledgingYourPast)} />
			}
			drawShapes={[ 14, 15, 16 ]}
			showLogo={true}
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
