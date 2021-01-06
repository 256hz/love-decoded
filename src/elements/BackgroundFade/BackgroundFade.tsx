import { BackgroundShape } from 'elements/Screen/BackgroundShape';
import React, { ReactChild } from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './BackgroundFade.styles';

export default ({ children }: { children?: ReactChild }) => (
	<>
		<ImageBackground
			source={require('@assets/png/default-background.png')}
			style={styles.background}
			resizeMode="cover"
		>
			<BackgroundShape drawShapes={[ 0, 6, 13 ]} />
			<View style={{ position: 'absolute', flex: 1 }}>
				{children}
			</View>
		</ImageBackground>
	</>
);
