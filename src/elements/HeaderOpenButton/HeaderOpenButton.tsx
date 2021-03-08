import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerDots } from '@elements';
import styles from './HeaderOpenButton.styles';

export default ({ navigation }) => (
	<TouchableOpacity onPress={navigation?.openDrawer}>
		<View style={styles.container}>
			<DrawerDots />
		</View>
	</TouchableOpacity>
);
