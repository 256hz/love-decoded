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
	multiline?: boolean;
	setText: (arg: string) => void;
	style?: ViewStyle;
	text: string;
};

export default ({
	text,
	multiline = true,
	setText,
	style,
	containerStyle,
}: Props) => {
	const onChangeText = (newText: string) => {
		if (newText.length === 0) {
			setText(SingleBullet);
			return;
		}

		const lastCharacter = newText[newText.length - 1];
		const isAddingBullet = newText.length > text.length;

		lastCharacter === '\n' && isAddingBullet
			? setText(`${newText}${SingleBullet}`)
			: setText(newText);
	};

	return (
		<View style={[ styles.container, containerStyle ]}>
			<TextInput
				multiline={multiline}
				onChangeText={onChangeText}
				onBlur={Keyboard.dismiss}
				style={[ styles.textInput, style ]}
				textAlignVertical="top"
				value={text || SingleBullet}
			/>
		</View>
	);
};
