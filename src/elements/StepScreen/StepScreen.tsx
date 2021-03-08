import React, { ReactChild } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './StepScreen.styles';

type Props = {
	children: ReactChild;
	scrollDisabled?: boolean;
};

export default ({
	children,
	scrollDisabled = false,
}: Props) => {

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>

				<ScrollWrapper scrollDisabled={scrollDisabled}>
					{children}
				</ScrollWrapper>

			</SafeAreaView>
		</View>
	);
};

const ScrollWrapper = ({ scrollDisabled, children }: { scrollDisabled: boolean, children: ReactChild }) => (
	scrollDisabled
		? <View style={styles.childrenContainer}>{children}</View>
		: <ScrollView contentContainerStyle={styles.childrenContainer}>{children}</ScrollView>
);
