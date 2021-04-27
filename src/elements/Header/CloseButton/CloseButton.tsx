import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton from '@assets/svg/close-x.svg';
import styles from './CloseButton.styles';

export default ({ navigation, closeTarget }) => {
	const onPress = closeTarget
		? () => navigation.navigate(closeTarget)
		: () => navigation.goBack();

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<CloseButton />
			</View>
		</TouchableOpacity>
	);
};
