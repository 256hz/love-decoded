import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Info from '@assets/svg/info.svg';
import styles from './InfoBubbleHeader.styles';

export default ({ navigation, infoBubbleTarget }) => {
	return infoBubbleTarget !== undefined
		? (
			<TouchableOpacity onPress={() => navigation.navigate(infoBubbleTarget)}>
				<View style={styles.container}>
					<Info />
				</View>
			</TouchableOpacity>
		)
		: <></>;
};
