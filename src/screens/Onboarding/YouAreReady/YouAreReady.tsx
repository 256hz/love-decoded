import { useNavigation } from '@react-navigation/native';
import { OnboardingScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StepScreens } from 'route/StepStack';
import { OnboardingScreens } from 'route/enums';
import { changeStack } from 'util/navigation';
import styles from './YouAreReady.styles';

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

	return (
		<OnboardingScreen
			drawShapes={[ 0, 6, 13 ]}
			customBottomSection={<></>}
			customButtons={<></>}
			titleContainerStyle={styles.titleContainerStyle}
		>
			<View style={styles.container}>
				<Text style={styles.headlineText}>
					{'You Are Ready\nFor Step 1'}
				</Text>
				<EnterButton onPress={() => changeStack(StepScreens.Home)} />
			</View>
		</OnboardingScreen>
	);
};
