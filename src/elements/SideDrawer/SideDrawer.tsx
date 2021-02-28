/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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
import styles from './SideDrawer.styles';

export default (props) => {
	const { navigation } = props;

	return (
		<DrawerContentScrollView {...props}>
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
			</SafeAreaView>
		</DrawerContentScrollView>
	);
};

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
