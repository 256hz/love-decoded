import React, { ReactChild, useEffect } from 'react';
import { View } from 'react-native';
import { Screens } from 'route/enums';
import { CustomScrollView } from '@elements';
import NavButtons from '@elements/AudioPlayerNavigator/NavButtons';
import { CloseHeader } from 'elements/Header/HeaderOptions';
import styles from './ResourcesScreen.styles';

type Props = {
	hideBackButton?: boolean;
	children: ReactChild;
	closeTarget?: Screens;
	navigation: any;
	nextTarget?: Screens;
	nextTitle?: string;
	scrollDisabled?: boolean;
};

export default ({
	children,
	closeTarget,
	hideBackButton,
	navigation,
	nextTarget,
	nextTitle,
	scrollDisabled = false,
}: Props) => {
	useEffect(() => {
		navigation.setOptions(CloseHeader(navigation, 'Resources', closeTarget));
	}, [ navigation, closeTarget ]);

	return (
		<View style={styles.container}>
			<CustomScrollView
				scrollDisabled={scrollDisabled}
			>
				{ children }
			</CustomScrollView>

			{ nextTarget
				? <NavButtons nextTarget={nextTarget} nextTitle={nextTitle} hideBackButton={hideBackButton }/>
				: null
			}
		</View>
	);
};
