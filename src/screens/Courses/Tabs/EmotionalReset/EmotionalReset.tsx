import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { DEMO_MODE } from '@util/demoMode';
import { resetAudioPlayer } from '@redux/action';
import { StepScreen } from '@elements';
import { EmotionalResetScreens } from 'route/enums';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './EmotionalReset.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const [ linksDisabled, setLinksDisabled ] = useState(!DEMO_MODE);

	const onPress = () => {
		dispatch(resetAudioPlayer(true, 'erb-onNext'));
		navigate(EmotionalResetScreens.Progress);
	};

	return (
		<StepScreen containerStyle={styles.container}>
			<>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Your Emotional Reset
					</Text>
				</View>

				<View style={styles.buttonsContainer}>
					<View>
						<Text style={styles.text}>
							Frustrated with your progress? Something making you sad?
						</Text>

						<NextButtonWithText
							onPress={onPress}
							disabled={linksDisabled}
						/>
					</View>

					<View>
						<Text style={styles.text}>
							Frustrated with the app technology?
						</Text>
						<NextButtonWithText
							onPress={() => navigate(EmotionalResetScreens.App)}
							disabled={linksDisabled}
						/>
					</View>
					<View>
						<Text style={styles.text}>
							Ready to quit on yourself and the App?
						</Text>
						<NextButtonWithText
							onPress={() => navigate(EmotionalResetScreens.Quit)}
							disabled={linksDisabled}
						/>
					</View>
				</View>
			</>
		</StepScreen>
	);
};

const NextButtonWithText = ({ onPress, disabled }: { onPress: () => void, disabled?: boolean }) => (
	<View style={styles.bottomContainer}>
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<View style={[ styles.navButton, disabled && styles.disabled ]}>
				<Text style={[ styles.text, styles.navButtonText ]}>click to listen</Text>
			</View>
		</TouchableOpacity>
	</View>
);
