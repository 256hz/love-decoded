/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';
import {
	Image, Linking, Text, View,
} from 'react-native';
import SettingsDot from '@assets/svg/settings-dot.svg';
import colors from 'elements/globalStyles/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './SideDrawer.styles';

export default (props) => {
	const { navigation } = props;

	return (
		<DrawerContentScrollView {...props}>
			<SafeAreaView>
				<View style={styles.topContainer}>
					<View style={styles.profileContainer}>
						<Image source={require('@assets/png/mock-profile-pic.png')} />
						<Text>Jasmine</Text>
						<Text>Introductory Course</Text>
						<Text>jasminecook@gmail.com</Text>
					</View>
					<TouchableOpacity onPress={navigation.closeDrawer}>
						<View style={styles.dotsContainer}>
							<SettingsDot fill={colors.Orange} />
							<SettingsDot fill={colors.Red} />
							<SettingsDot fill={colors.Pink} />
						</View>
					</TouchableOpacity>
				</View>
				<DrawerItem
					label="Help"
					onPress={() => Linking.openURL('https://mywebsite.com/help')}
				/>
			</SafeAreaView>
		</DrawerContentScrollView>
	);
};
