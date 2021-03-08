import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserEmail, getUserFirstName } from 'redux/selector';
import styles from './UserHeader.styles';

export default () => {
	const firstName = useSelector(getUserFirstName);
	const email = useSelector(getUserEmail);

	return (
		<View style={styles.container}>
			<Image
				source={require('@assets/png/mock-profile-pic.png')}
				style={styles.imageContainer}
			/>
			<Text style={styles.nameText}>{firstName}</Text>
			<Text style={styles.progressText}>Introductory Course</Text>
			<Text style={styles.emailText}>{email}</Text>
		</View>
	);
};
