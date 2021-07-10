import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton2 from '@assets/svg/close-x-2.svg';
import styles from './CloseButton2Header.styles';

export default ({ navigation, destination }) => {
	const onPress = destination
		? () => { navigation.navigate(destination); }
		: navigation.goBack;

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<CloseButton2 />
			</View>
		</TouchableOpacity>
	);
};
