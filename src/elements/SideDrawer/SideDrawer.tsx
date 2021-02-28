/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
<<<<<<< HEAD
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Profile1 from '@assets/svg/drawer-profile-1.svg';
import Profile2 from '@assets/svg/drawer-profile-2.svg';
import Goals from '@assets/svg/drawer-goals.svg';
import Sources1 from '@assets/svg/drawer-sources-1.svg';
import Sources2 from '@assets/svg/drawer-sources-2.svg';
import Sources3 from '@assets/svg/drawer-sources-3.svg';
import Community from '@assets/svg/drawer-community.svg';
import Facebook from '@assets/svg/drawer-facebook.svg';
import Email from '@assets/svg/drawer-email.svg';
import Settings1 from '@assets/svg/drawer-settings-1.svg';
import Settings2 from '@assets/svg/drawer-settings-2.svg';
import LogOut1 from '@assets/svg/drawer-logout-1.svg';
import LogOut2 from '@assets/svg/drawer-logout-2.svg';
import Logo from '@assets/svg/logo-sm.svg';

import CloseDots from './CloseDots';
import UserHeader from './UserHeader';
import DrawerLink from './DrawerLink';
=======
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
>>>>>>> Tab and drawer navigators
import styles from './SideDrawer.styles';

export default (props) => {
	const { navigation } = props;

	return (
		<DrawerContentScrollView {...props}>
<<<<<<< HEAD
			<SafeAreaView style={styles.container}>
				<View>
					<View style={styles.topContainer}>
						<UserHeader />
						<CloseDots onPress={navigation.closeDrawer} />
					</View>
					<DrawerLink icon={<ProfileIcon />} label="Profile" />
					<DrawerLink icon={<Goals />} label="Goals" />
					<DrawerLink icon={<SourcesIcon />} label="Sources of Pain" />
					<DrawerLink icon={<Community />} label="My Unconditional Community" />
					<Divider />
					<DrawerLink icon={<Facebook />} label="Join Our Private Facebook Group" />
					<DrawerLink icon={<Email />} label="Email Us" />
					<Divider />
					<DrawerLink icon={<SettingsIcon />} label="Settings" />
					<DrawerLink icon={<LogOutIcon />} label="Log Out" />
				</View>

				<View style={styles.footerContainer}>
					<Logo />
				</View>
=======
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
>>>>>>> Tab and drawer navigators
			</SafeAreaView>
		</DrawerContentScrollView>
	);
};
<<<<<<< HEAD

const Divider = () => (
	<View style={styles.divider} />
);

const ProfileIcon = () => (
	<View style={styles.iconContainer}>
		<Profile1 />
		<View style={styles.iconOverlay}>
			<Profile2 />
		</View>
	</View>
);

const SourcesIcon = () => (
	<View style={styles.iconContainer}>
		<Sources1 />
		<View style={styles.iconOverlay}>
			<Sources2 />
		</View>
		<View style={styles.iconOverlay}>
			<Sources3 />
		</View>
	</View>
);

const SettingsIcon = () => (
	<View style={styles.iconContainer}>
		<Settings1 />
		<View style={styles.iconOverlay}>
			<Settings2 />
		</View>
	</View>
);

const LogOutIcon = () => (
	<View style={styles.iconContainer}>
		<LogOut1 />
		<View style={styles.iconOverlay2}>
			<LogOut2 />
		</View>
	</View>
);
=======
>>>>>>> Tab and drawer navigators
