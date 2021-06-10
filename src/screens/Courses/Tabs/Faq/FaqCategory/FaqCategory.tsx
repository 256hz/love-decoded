import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './FaqCategory.styles';

export default ({ name, active, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[ styles.container, active && styles.active ]}>
				<Text style={[ styles.text, active && styles.activeText ]}>
					{name}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
