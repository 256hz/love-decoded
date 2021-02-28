import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SettingsDot from '@assets/svg/settings-dot.svg';
import colors from '@elements/globalStyles/color';
import styles from './CloseDots.styles';

export default ({ onPress }: { onPress: () => void }) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.dotsContainer}>
			<SettingsDot fill={colors.Orange} />
			<SettingsDot fill={colors.Red} />
			<SettingsDot fill={colors.Pink} />
		</View>
	</TouchableOpacity>
);
