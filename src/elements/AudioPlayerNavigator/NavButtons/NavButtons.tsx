import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackArrow from '@assets/svg/back-arrow.svg';
import NextArrow from '@assets/svg/next-arrow.svg';
import { Screens } from 'route/OnboardingStack';
import { useNavigation } from '@react-navigation/native';
import styles from './NavButtons.styles';

interface Props {
	backTarget?: Screens;
	nextTarget: Screens;
	playedToEnd: boolean;
}

export default ({ backTarget, nextTarget, playedToEnd }: Props) => {
	const { navigate, goBack, canGoBack } = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => { backTarget ? navigate(backTarget) : canGoBack() && goBack(); }}
				disabled={!canGoBack()}
			>
				<View style={{
					...styles.navButton,
					...(!canGoBack() ? styles.disabled : {}),
				}}>
					<BackArrow />
					<Text style={styles.text}>Back</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => { nextTarget ? navigate(nextTarget) : null; }}
				disabled={!nextTarget || !playedToEnd}
			>
				<View style={{
					...styles.navButton,
					...(!(playedToEnd || nextTarget) ? styles.disabled : {}),
				}}>
					<Text style={styles.text}>Next</Text>
					<NextArrow />
				</View>
			</TouchableOpacity>
		</View>

	);
};
