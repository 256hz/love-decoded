import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackArrow2 from '@assets/svg/back-arrow-2.svg';
import styles from './BackButton.styles';

export default ({ navigation }) => {
	return (
		<TouchableOpacity onPress={navigation?.goBack}>
			<View style={styles.container}>
				<BackArrow2 />
			</View>
		</TouchableOpacity>
	);
};
