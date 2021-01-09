import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingScreen, AudioPlayerNavigator } from '@elements';
import { Screens } from 'route/OnboardingStack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Introduction.styles';

const EnterButton = ({ onPress }) => (
	<TouchableOpacity onPress={onPress}>
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
						nextTarget={Screens.Introduction}
						customButtons={<EnterButton onPress={navigate(Screens.Introduction)} />}
					/>
				</View>
			</View>
		</OnboardingScreen>
	);
};
