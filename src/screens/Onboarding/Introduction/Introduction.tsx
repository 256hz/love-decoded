import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingScreen, AudioPlayerNavigator } from '@elements';
import { OnboardingStackParamList, Screens } from 'route/OnboardingStack';
import { StackNavigationProp } from '@react-navigation/stack';
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

type IntroductionScreenNavigationProp = StackNavigationProp<
OnboardingStackParamList,
Screens.Introduction
>;

type Props = {
	navigation: IntroductionScreenNavigationProp;
};

export default ({ navigation: { navigate } }: Props) => {
	return (
		<OnboardingScreen
			drawShapes={[ 14, 15, 16 ]}
			showLogo={true}
			title="You are Born to be Loved"
		>
			<View style={styles.container}>
				<View />
				<View>
					<View style={[ styles.subTitleContainer, {
						left: 40,
						bottom: 300,
						backgroundColor: '#DD1E36',
					} ]}>
						<Text style={styles.subTitleText}>
							We Know Your Pain
						</Text>
					</View>
					<View style={[ styles.subTitleContainer, {
						right: 40,
						bottom: 260,
						backgroundColor: '#D31772',
					} ]}>
						<Text style={styles.subTitleText}>
							Loving Self Will Heal It
						</Text>
					</View>
					<AudioPlayerNavigator
						audioFilename="music.mp3"
						customButtons={
							<EnterButton onPress={() => navigate(Screens.AcknowledgingYourPast)} />
						}
					/>
				</View>
			</View>
		</OnboardingScreen>
	);
};
