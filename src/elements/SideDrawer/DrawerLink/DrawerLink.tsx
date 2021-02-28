import React, { ReactChild } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './DrawerLink.styles';

type Props = {
	icon: ReactChild;
	label: string;
	onPress?: () => void;
};

export default ({ icon, label, onPress = () => {} }: Props) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				{icon}
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.labelText}>
					{label}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);
