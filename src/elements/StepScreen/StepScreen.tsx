import React, { ReactChild } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './StepScreen.styles';

type Props = {
	children: ReactChild;
};

export default ({ children }: Props) => (
	<SafeAreaView style={styles.container}>
		<View />
	</SafeAreaView>
);
