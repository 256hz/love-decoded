import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import DownArrow2 from '@assets/svg/down-arrow-2.svg';
import { ActivityFromNumber } from '@util/titles';
import { getUserProgressNumbers } from '@redux/selector';
import { setUserProgress } from '@redux/action';
import {
	Activity, CourseNumber, DayNumber, StepNumber,
} from '@redux/types/user';
import styles from './ContentReview.styles';

const dropdownChoices = [
	Array.from({ length: 3 }, (_, i) => i + 1).map(value => ({ label: `Course ${value}`, value })),
	Array.from({ length: 7 }, (_, i) => i + 1).map(value => ({ label: `Step ${value}`, value })),
	Array.from({ length: 7 }, (_, i) => i + 1).map(value => ({ label: `Day ${value}`, value })),
	Array.from({ length: 4 }, (_, i) => i + 1).map(value => ({ label: `${ActivityFromNumber[value]}`, value })),
];

export default () => {
	const hasSetContent = useRef(false);
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const {
		currentCourseNumber: course,
		currentStepNumber: step,
		currentDayNumber: day,
		currentActivityNumber: activity,
	} = useSelector(getUserProgressNumbers);

	const progressText = `Course ${course}, Step ${step}, Day ${day}, ${ActivityFromNumber[activity]}`;

	const placeholders = [
		{ label: hasSetContent ? progressText : 'Choose Content', key: 'course', inputLabel: '' },
		{ label: '', key: 'step', inputLabel: '' },
		{ label: '', key: 'day', inputLabel: '' },
		{ label: '', key: 'activity', inputLabel: '' },
	];

	const picker = useRef<any>(null);
	const [ currentPicker, setCurrentPicker ] = useState(0);
	const selections = [ 0, 0, 0, 0 ];


	const onSelect = value => {
		console.log({ currentPicker, value });

		if (!value || hasSetContent.current) {
			return;
		}

		selections[currentPicker] = value;

		if (currentPicker < selections.length - 1) {
			hasSetContent.current = false;

			setCurrentPicker(currentPicker + 1);
		} else {
			hasSetContent.current = true;

			dispatch(setUserProgress(
				selections[0] as CourseNumber,
				selections[1] as StepNumber,
				selections[2] as DayNumber,
				selections[3] as Activity,
			));

			setCurrentPicker(0);

			picker.current?.togglePicker(true);
		}
	};

	const onPress = () => {

	};

	return (
		<View style={styles.container}>

			<View style={styles.titleContainer}>
				<Text style={styles.headline}>
					Content Review
				</Text>
			</View>

			<View style={styles.chooserContainer}>
				<RNPickerSelect
					ref={picker}
					placeholder={placeholders[currentPicker]}
					items={dropdownChoices[currentPicker]}
					value={selections[currentPicker]}
					onValueChange={onSelect}
					style={{
						placeholder: styles.placeholderText,
						inputIOS: styles.text,
						inputAndroid: styles.text,
						viewContainer: { flex: 1, justifyContent: 'center' },
					}}
				/>
				<DownArrow2 />
			</View>

			<View style={styles.buttonRowContainer}>
				<TouchableOpacity onPress={onPress}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>
							GO
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
