import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Info from '@assets/svg/info.svg';
import styles from './InfoBubbleHeader.styles';

export default ({ navigation, infoBubbleTarget }) => {
	const onPress = () => {
		navigation.navigate(infoBubbleTarget);
	};

	return !!infoBubbleTarget && !!navigation
		? (
			<TouchableOpacity onPress={onPress}>
				<View style={styles.container}>
					<Info />
				</View>
			</TouchableOpacity>
		)
		: <></>;
};
