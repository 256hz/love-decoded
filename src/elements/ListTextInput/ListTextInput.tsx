import React from 'react';
import {
	Keyboard,
	View,
	ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './ListTextInput.styles';

export const SingleBullet = '  \u2022 ';

type Props = {
	containerStyle?: ViewStyle;
	onPressInfoBubble?: () => void;
	setText: (arg: string) => void;
	showInfoBubble?: boolean;
	style?: ViewStyle;
	text: string;
};

export default ({
	text,
	setText,
	style,
	containerStyle,
	showInfoBubble,
	onPressInfoBubble,
}: Props) => {
	const onKeyPress = ({ nativeEvent: { key } }) => {
		if (key === 'Enter') {
			setText(`${text}\n  \u2022 `);
			return;
		}

		if (key.match(/^[\w -"':;,.\(\)\{\}\[\]\\\/]$/)) {
			setText(`${text}${key}`);
			return;
		}

		if (key === 'Backspace') {
			setText(text.substr(0, text.length - 1));

			if (text.replace(' ', '') === '') {
				setText(SingleBullet);
			}
		}
	};

	return (
		<View style={[ styles.container, containerStyle ]}>
			<TextInput
				multiline
				onKeyPress={onKeyPress}
				onBlur={Keyboard.dismiss}
				style={[ styles.textInput, style ]}
				textAlignVertical="top"
				value={text}
			/>
		</View>
	);
};
