import React, { ReactChild, useEffect, useRef } from 'react';
import {
	EmitterSubscription,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StatusBar,
	ViewStyle,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import styles from './StackKeyboardAvoidingView.styles';

type Props = {
	children: ReactChild;
	setKeyboardVisible?: (arg: boolean) => void;
	style?: ViewStyle;
};

export default ({ children, setKeyboardVisible, style }: Props) => {
	const headerHeight = useHeaderHeight();
	const showListener = useRef<EmitterSubscription>();
	const hideListener = useRef<EmitterSubscription>();

	useEffect(() => {
		if (setKeyboardVisible) {
			showListener.current = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
			hideListener.current = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
		}

		return () => {
			showListener.current?.remove();
			hideListener.current?.remove();
		};
	}, [ setKeyboardVisible ]);

	return (
		<KeyboardAvoidingView
			style={[ styles.container, style ]}
			behavior={Platform.select({ ios: 'padding' })}
			keyboardVerticalOffset={headerHeight + (StatusBar?.currentHeight || 0)}
		>
			{children}
		</KeyboardAvoidingView>
	);
};
