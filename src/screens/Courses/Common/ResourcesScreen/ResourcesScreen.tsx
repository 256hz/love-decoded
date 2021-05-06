import React, { ReactChild, useEffect } from 'react';
import { View } from 'react-native';
import { Screens } from 'route/enums';
import { CustomScrollView } from '@elements';
import NavButtons from '@elements/AudioPlayerNavigator/NavButtons';
import { CloseHeader } from '@elements/Headers/Headers';
import styles from './ResourcesScreen.styles';

type Props = {
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	children: ReactChild;
	closeTarget?: Screens;
	onClose?: () => void;
	navigation: any;
	nextTarget?: Screens;
	nextTitle?: string;
	scrollDisabled?: boolean;
};

export default ({
	children,
	closeTarget,
	hideBackButton,
	hideNextButton,
	onClose,
	navigation,
	nextTarget,
	nextTitle,
	scrollDisabled = false,
}: Props) => {
	useEffect(() => {
		navigation.setOptions(CloseHeader(navigation, 'Resources', onClose));
	}, [ navigation, closeTarget, onClose ]);

	return (
		<View style={styles.container}>
			<CustomScrollView
				style={{ marginBottom: 24 }}
				scrollDisabled={scrollDisabled}
			>
				{ children }
			</CustomScrollView>

			{ nextTarget != undefined
				? <NavButtons
					backEnabled
					hideBackButton={hideBackButton}
					hideNextButton={hideNextButton}
					nextTarget={nextTarget}
					nextTitle={nextTitle}
					nextEnabled
				/>
				: null
			}
		</View>
	);
};
