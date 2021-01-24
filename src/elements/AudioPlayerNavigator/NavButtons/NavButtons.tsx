import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackArrow from '@assets/svg/back-arrow.svg';
import NextArrow from '@assets/svg/next-arrow.svg';
import { Screens } from 'route/OnboardingStack';
import styles from './NavButtons.styles';

interface Props {
	backTarget?: Screens;
	hideBackButton?: boolean;
	nextTarget: Screens;
	nextEnabled: boolean;
	onNextCallback?: (arg?: any) => void;
}

export default ({
	backTarget,
	hideBackButton,
	nextTarget,
	nextEnabled,
	onNextCallback,
}: Props) => {
	const { navigate, goBack, canGoBack } = useNavigation();
	const nextIsEnabled = nextTarget && nextEnabled;

	return (
		<View style={styles.container}>
			{
				hideBackButton
					? <View />
					: (
						<TouchableOpacity
							onPress={() => {
								backTarget
									? navigate(backTarget)
									: canGoBack() && goBack();
							}}
							disabled={!canGoBack()}
						>
							<View style={[
								styles.navButton,
								!canGoBack() && styles.disabled,
							]}>
								<BackArrow />
								<Text style={styles.text}>Back</Text>
							</View>
						</TouchableOpacity>
					)
			}

			<TouchableOpacity
				onPress={() => {
					nextTarget && navigate(nextTarget);
					onNextCallback?.();
				}}
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
		</View>
	);
};
