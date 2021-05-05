import React from 'react';
import { View } from 'react-native';
import SettingsDot from '@assets/svg/settings-dot.svg';
import colors from '@elements/globalStyles/color';
import styles from './DrawerDots.styles';

export default ({ orientation = 'horizontal' }: { orientation?: 'vertical' | 'horizontal' }) => (
	<View style={[ styles.container, orientation === 'vertical' && styles.verticalContainer ]}>
		<SettingsDot fill={colors.Orange} />
		<View style={styles.dotSpace} />
		<SettingsDot fill={colors.Red} />
		<View style={styles.dotSpace} />
		<SettingsDot fill={colors.Pink} />
	</View>
);
