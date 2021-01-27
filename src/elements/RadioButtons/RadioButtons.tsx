import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './RadioButtons.styles';

export interface IRadioButton {
	label: string;
	value: string | number | boolean;
}

interface RadioButtonsProps {
	buttons: IRadioButton[],
	containerStyle?: ViewStyle;
	selectedValue?: string | number | boolean | string[];
	setSelectedValue: Function;
}

interface RadioButtonProps {
	isSelected?: boolean;
	setSelected: RadioButtonsProps['setSelectedValue'];
	label: IRadioButton['label'];
	value: IRadioButton['value'];
}

const RadioButton = ({ isSelected, setSelected, label, value }: RadioButtonProps) => (
	<TouchableOpacity onPress={() => setSelected(value)}>
		<View style={styles.optionContainer}>
			<View style={[ styles.button, isSelected && styles.selected ]} />
			<Text style={styles.labelText}>{label}</Text>
		</View>
	</TouchableOpacity>
);

export default ({ buttons, containerStyle, selectedValue, setSelectedValue }: RadioButtonsProps) => (
	<View style={[ styles.container, containerStyle ]}>
		{buttons.map(({ label, value }) => (
			<RadioButton
				label={label}
				value={value}
				isSelected={value === selectedValue}
				setSelected={setSelectedValue}
				key={value.toString()}
			/>
		))}
	</View>
);
