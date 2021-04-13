import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import DownArrow2 from '@assets/svg/down-arrow-2.svg';
import { stepEntryPoints } from 'route/enums';
import { getUserProgressNumbers } from '@redux/selector';
import { setUserProgress } from '@redux/action';
import {
	Activity,
	Course,
	Day,
	Step,
} from '@redux/types/user';
import { CourseFromNumber, StepFromNumber } from 'redux/types/survey';
import styles from './ContentReview.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const picker = useRef<RNPickerSelect>(null);

	const {
		currentCourseNumber: course,
		currentStepNumber: step,
	} = useSelector(getUserProgressNumbers);

	const [ destination, setDestination ] = useState<string>(`${course}${step}`);

	const placeholder = { label: 'Choose a Step', key: 'step', inputLabel: 'step' };

	// values and keys must match.  The format is: `${courseNumber}${stepNumber}`
	const dropdownChoices = [
		{ label: 'Course 1 - Step 1', value: '11', key: '11' },
		{ label: 'Course 1 - Step 2', value: '12', key: '12' },
	];

	const onValueChange = value => {
		console.log('onValueChange');
		setDestination(value);
		picker.current?.togglePicker(true);
	};

	const getDestinationFromString = courseStepString => {
		const [ courseNumber, stepNumber ] = courseStepString;
		return [ parseInt(courseNumber), parseInt(stepNumber) ];
	};

	const onPressGo = () => {
		const [ courseNumber, stepNumber ] = getDestinationFromString(destination);
		dispatch(setUserProgress(
			courseNumber as Course,
			stepNumber as Step,
			1 as Day,
			1 as Activity,
		));

		const courseDestination = CourseFromNumber[courseNumber];
		const stepDestination = StepFromNumber[stepNumber];

		navigate(stepEntryPoints[courseDestination]![stepDestination]!);
	};

	const goDisabled = (() => {
		const [ courseNumber, stepNumber ] = getDestinationFromString(destination);
		return courseNumber === course && stepNumber === step;
	})();

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
					placeholder={placeholder}
					items={dropdownChoices}
					itemKey={destination}
					onValueChange={onValueChange}
					style={{
						placeholder: styles.placeholderText,
						inputIOS: styles.text,
						inputAndroid: styles.text,
						viewContainer: styles.pickerContainer,
					}}
				/>
				<View style={styles.chevronContainer}>
					<DownArrow2 />
				</View>
			</View>

			<View style={styles.buttonRowContainer}>
				<TouchableOpacity onPress={onPressGo} disabled={goDisabled}>
					<View style={[ styles.button, goDisabled && styles.disabled ]}>
						<Text style={styles.buttonText}>
							GO
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
