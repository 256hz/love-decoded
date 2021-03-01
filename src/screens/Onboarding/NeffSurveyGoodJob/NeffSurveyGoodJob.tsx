import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Screens } from 'route/enums';
import { OnboardingScreen } from '@elements';
import { useNavigation } from '@react-navigation/native';
import styles from './NeffSurveyGoodJob.styles';

type EnterButtonProps = {
	onPress: () => void;
};

const EnterButton = ({ onPress }: EnterButtonProps) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.enterButtonContainer}>
			<View style={styles.enterButton}>
				<Text style={styles.buttonText}>Next</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default () => {
	const { navigate } = useNavigation();
	const onPress = () => navigate(Screens.EmotionalResetButton);
	return (
		<OnboardingScreen
			drawShapes={[ 0, 6, 13 ]}
			customBottomSection={<></>}
			customButtons={<></>}
			titleContainerStyle={styles.titleContainerStyle}
		>
			<View style={styles.container}>
				<Text style={styles.headlineText}>
					Good Job!
				</Text>
				<Text style={styles.text}>
					You’ve Completed The Survey
				</Text>
				<EnterButton onPress={onPress} />
			</View>
		</OnboardingScreen>
	);
};
