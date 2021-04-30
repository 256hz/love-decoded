import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton from '@assets/svg/close-x.svg';
import styles from './CloseButtonHeader.styles';

export default ({ navigation, onClose }) => {
	const onPress = onClose || navigation.goBack;

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<CloseButton />
			</View>
		</TouchableOpacity>
	);
};
