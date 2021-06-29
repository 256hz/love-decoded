import { useIsFocused } from '@react-navigation/native';
import colors from 'elements/globalStyles/color';
import React, { useEffect, useRef, useState } from 'react';


import {
	Keyboard,
	View,
	ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './ListTextInput.styles';

export const SingleBullet = '\u2022 ';

type Props = {
	containerStyle?: ViewStyle;
	multiline?: boolean;
	placeholder?: string;
	setText: (arg: string) => void;
	style?: ViewStyle;
	text: string;
};

export default ({
	text,
	multiline = true,
	placeholder,
	setText,
	style,
	containerStyle,
}: Props) => {
	const [ isFocused, setIsFocused ] = useState(false);

	const onChangeText = (newText: string, hasFocus: boolean) => {
		if (newText.length === 0) {
			setText(hasFocus ? SingleBullet : undefined as unknown as string);
			return;
		}

		const lastCharacter = newText.slice(-1);
		const isAddingBullet = (newText?.length || 0) > (text?.length || 0);

		lastCharacter === '\n' && isAddingBullet
			? setText(`${newText}${SingleBullet}`)
			: setText(newText);
	};

	const getText = (textProp: string, hasFocus: boolean, placeholderProp?: string) => {
		if (!textProp && hasFocus) {
			return SingleBullet;
		}

		if (!hasFocus && (!textProp || textProp === SingleBullet)) {
			return placeholderProp || SingleBullet;
		}

		return textProp;
	};

	useEffect(() => {
		console.log({ text, isFocused });
	}, [ text, isFocused ]);

	return (
		<View style={[ styles.container, containerStyle ]}>
			<TextInput
				multiline={multiline}
				onChangeText={newText => onChangeText(newText, isFocused)}
				onBlur={() => { Keyboard.dismiss; setIsFocused(false); console.log('blur');}}
				onFocus={() => { setIsFocused(true); console.log('focus');}}
				style={[
					styles.textInput,
					placeholder && !isFocused ? styles.notFocused : null,
					style,
				]}
				textAlignVertical="top"
				value={getText(text, isFocused, placeholder)}
			/>
		</View>
	);
};
