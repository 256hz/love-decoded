import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { stepEntryPoints } from 'route/enums';
import DownArrow2 from '@assets/svg/down-arrow-2.svg';
import { titles } from '@util/titles';
import { DEMO_MODE } from '@util/demoMode';
import { CourseFromNumber, StepFromNumber } from '@redux/types/survey';
import { getUserMaxProgressNumbers, getUserProgressNumbers } from '@redux/selector';
import { setUserProgress } from '@redux/action';
import {
	Activity,
	CourseNumber,
	DayNumber,
	StepNumber,
} from '@redux/types/user';
import colors from 'elements/globalStyles/color';
import styles from './ContentReview.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const picker = useRef<RNPickerSelect>(null);

	const {
		currentCourseNumber: course,
		currentStepNumber: step,
		currentDayNumber: day,
	} = useSelector(getUserProgressNumbers);

	const maxUserProgressNumbers = useSelector(getUserMaxProgressNumbers);

	const [ destination, setDestination ] = useState<string>(`${course}${step}`);

	const placeholder = { label: 'Choose a Step', key: 'placeholder', color: colors.GrayAF };

	const dropdownChoices = getDropDownChoices(maxUserProgressNumbers);

	const onValueChange = value => {
		if (!value) {
			return;
		}

		setDestination(value);
		picker.current?.togglePicker(true);
	};

	const getDestinationFromString = courseStepString => {
		const [ courseNumber, stepNumber, dayNumber, activityNumber ] = courseStepString;

		return {
			courseNumber: parseInt(courseNumber) as CourseNumber,
			stepNumber: parseInt(stepNumber) as StepNumber,
			dayNumber: parseInt(dayNumber) as DayNumber,
			activityNumber: parseInt(activityNumber) as Activity,
		};
	};

	const onPressGo = () => {
		const { courseNumber, stepNumber, dayNumber, activityNumber } = getDestinationFromString(destination);

		if (!courseNumber || !stepNumber || !dayNumber || !activityNumber) {
			console.warn('tried to navigate to empty destination:', destination);
			return;
		}

		dispatch(setUserProgress(courseNumber, stepNumber, dayNumber, activityNumber));

		const courseDestination = CourseFromNumber[courseNumber];
		const stepDestination = StepFromNumber[stepNumber];

		navigate(stepEntryPoints[courseDestination]![stepDestination]!);
	};

	const goDisabled = (() => {
		const { courseNumber, stepNumber, dayNumber } = getDestinationFromString(destination);

		return courseNumber === course
			&& stepNumber === step
			&& dayNumber === day;
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
					Icon={() => <View />}
					items={dropdownChoices}
					itemKey={destination}
					onValueChange={onValueChange}
					placeholder={placeholder}
					ref={picker}
					style={{
						chevronContainer: styles.noChevron,
						placeholder: styles.placeholderText,
						inputIOS: styles.text,
						inputAndroid: styles.text,
						viewContainer: styles.pickerContainer,
					}}
					// textInputProps={{ numberOfLines: 1 }}
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

const getDropDownChoices = (maxUserProgress) => {
	const {
		maxCourseNumber,
		maxStepNumber,
		maxDayNumber,
		maxActivityNumber,
	} = maxUserProgress;

	const currentMaxString = `${maxCourseNumber}${maxStepNumber}${maxDayNumber}${maxActivityNumber}`;

	// values and keys must match.  Format as currentMaxString.
	return [
		{ label: 'Step 1, Day 1', value: '1111', key: '1111' },
		(DEMO_MODE || maxDayNumber > 1 || maxStepNumber > 1 || maxCourseNumber > 1) && { label: 'Step 1, Day 2', value: '1121', key: '1121' },
		(DEMO_MODE || maxDayNumber > 2 || maxStepNumber > 1 || maxCourseNumber > 1) && { label: 'Step 1, Day 3', value: '1131', key: '1131' },
		(DEMO_MODE || maxDayNumber > 3 || maxStepNumber > 1 || maxCourseNumber > 1) && { label: 'Step 1, Day 4', value: '1141', key: '1141' },
		(DEMO_MODE || maxDayNumber > 4 || maxStepNumber > 1 || maxCourseNumber > 1) && { label: 'Step 1, Day 5', value: '1151', key: '1151' },
		(DEMO_MODE || maxDayNumber > 5 || maxStepNumber > 1 || maxCourseNumber > 1) && { label: 'Step 1, Day 6', value: '1161', key: '1161' },
		(DEMO_MODE || maxDayNumber > 6 || maxStepNumber > 1 || maxCourseNumber > 1) && { label: 'Step 1, Day 7', value: '1171', key: '1171' },
		(DEMO_MODE || maxStepNumber > 1 || maxCourseNumber > 1) && { label: `Step 2: ${titles.course1.step2}`, value: '1211', key: '1211' },
		(DEMO_MODE || maxStepNumber > 2 || maxCourseNumber > 1) && { label: `Step 3: ${titles.course1.step3}`, value: '1311', key: '1311' },
		(DEMO_MODE || maxStepNumber > 3 || maxCourseNumber > 1) && { label: `Step 4: ${titles.course1.step4}`, value: '1411', key: '1411' },
		(DEMO_MODE || maxCourseNumber > 1 || maxStepNumber > 1 || maxDayNumber > 1) && { label: `Current: Step ${maxStepNumber}, Day ${maxDayNumber}`, value: currentMaxString, key: currentMaxString },
	].filter(x => !!x) as Item[];
};
