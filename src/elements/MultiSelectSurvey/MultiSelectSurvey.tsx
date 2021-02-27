import React from 'react';
import {
	NativeSyntheticEvent,
	Text,
	TextInputEndEditingEventData,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './MultiSelectSurvey.styles';

interface MultiSelectOptionProps {
	option: string;
	selected: boolean;
	containerStyle?: ViewStyle;
	textStyle?: TextStyle;
	toggleSelected: (arg: string) => void;
}

const MultiSelectOption = ({
	containerStyle,
	option,
	selected,
	textStyle,
	toggleSelected,
}: MultiSelectOptionProps) => (
	<TouchableOpacity onPress={() => toggleSelected(option)}>
		<View style={[
			containerStyle || styles.selectionContainer,
			selected ? styles.selected : null,
		] }>
			<Text style={textStyle || styles.selectionText}>
				{option}
			</Text>
		</View>
	</TouchableOpacity>
);

interface MultiSelectCustomOptionProps {
	containerStyle?: ViewStyle;
	onChange: (arg: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
	option: string;
	selected: boolean;
	textStyle?: TextStyle;
}

const CustomMultiSelectOption = ({
	containerStyle = {},
	onChange,
	option,
	selected,
	textStyle = {},
}: MultiSelectCustomOptionProps) => {
	return (
		<View style={[
			styles.selectionContainer,
			containerStyle,
			selected ? styles.selected : null,
		] }>
			<TextInput
				placeholder="Other"
				style={textStyle || styles.selectionText}
				onEndEditing={onChange}
			>
				{option}
			</TextInput>
		</View>
	);
};

interface Props {
	customSelection: string;
	options: string[];
	selectionContainerStyle?: ViewStyle;
	selectionTextStyle?: TextStyle;
	selections?: string[];
	setCustomSelection: (arg: string) => void;
	toggleSelected: (arg: string) => void;
}

export default ({
	customSelection,
	options,
	selectionContainerStyle,
	selectionTextStyle,
	selections = [],
	setCustomSelection,
	toggleSelected,
}: Props) => (
	<View style={[ styles.multiSelectContainer, styles.multiSelectContainerStyle ]}>
		{ options.map(option => (
			<MultiSelectOption
				option={option}
				selected={selections.includes(option)}
				toggleSelected={toggleSelected}
				containerStyle={selectionContainerStyle}
				textStyle={selectionTextStyle}
				key={option}
			/>
		))}

		<CustomMultiSelectOption
			option={customSelection}
			selected={customSelection !== ''}
			containerStyle={selectionContainerStyle}
			textStyle={selectionTextStyle}
			onChange={({ nativeEvent: { text } }) => setCustomSelection(text)}
		/>
	</View>
);
