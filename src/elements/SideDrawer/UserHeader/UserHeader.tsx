import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './UserHeader.styles';

export default () => (
	<View style={styles.container}>
		<Image
			source={require('@assets/png/mock-profile-pic.png')}
			style={styles.imageContainer}
		/>
		<Text style={styles.nameText}>Jasmine</Text>
		<Text style={styles.progressText}>Introductory Course</Text>
		<Text style={styles.emailText}>jasminecook@gmail.com</Text>
	</View>
);
