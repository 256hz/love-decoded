import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackArrow2 from '@assets/svg/back-arrow-2.svg';
import styles from './BackButtonHeader.styles';

export default ({ navigation, destination }) => {
	return (
		<TouchableOpacity
			onPress={destination
				? () => navigation.navigate(destination)
				: navigation.goBack
			}
		>
			<View style={styles.container}>
				<BackArrow2 />
			</View>
		</TouchableOpacity>
	);
};
