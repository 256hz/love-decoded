import React, { ReactChild } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './StepScreen.styles';

type Props = {
	children: ReactChild;
	showSidebarOpener?: boolean;
};

export default ({ children, showSidebarOpener }: Props) => (
	<SafeAreaView style={styles.container}>
		<View />
	</SafeAreaView>
);
