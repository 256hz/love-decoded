import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ShareWidget.styles';

type Props = {
	linesToShare: string[];
};

export default ({ linesToShare }: Props) => {
	const onPress = (lines: string[]) => {
		console.log('share:', lines.join(', '));
	};

	return (
		<TouchableOpacity onPress={() => onPress(linesToShare)}>
			<View style={styles.shareContainer}>
				<View style={styles.shareItem}>
					<Image source={require('@assets/png/sms.png')} />
					<Text style={styles.bodyText}>sms</Text>
				</View>

				<View style={styles.shareItem}>
					<Image source={require('@assets/png/email.png')} />
					<Text style={styles.bodyText}>email</Text>
				</View>

				<View style={styles.shareItem}>
					<Image source={require('@assets/png/notes.png')} />
					<Text style={styles.bodyText}>notes</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
