import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
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
import colors from '@elements/globalStyles/color';
import { alerts } from '@redux/reducer';
import styles from './ContentReview.styles';

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const picker = useRef<RNPickerSelect>(null);

	const {
		currentCourseNumber: course,
		currentStepNumber: step,
		currentDayNumber: day,
		currentActivityNumber: activity,
	} = useSelector(getUserProgressNumbers);

	const maxUserProgressNumbers = useSelector(getUserMaxProgressNumbers);

	const [ destination, setDestination ] = useState<string>();
	const [ goDisabled, setGoDisabled ] = useState(true);

	const placeholder = {
		label: 'Choose a Step',
		key: 'placeholder',
		color: colors.GrayAF,
		value: undefined,
	};

	const dropdownChoices = getDropDownChoices(maxUserProgressNumbers);

	const onValueChange = value => {
		if (!value) {
			return;
		}

		setDestination(value);
		picker.current?.togglePicker(true);
	};

	const getDestinationFromString = courseStepString => {
		const [ courseNumber, stepNumber, dayNumber, activityNumber ] = courseStepString.split('-');

		return {
			courseNumber: parseInt(courseNumber) as CourseNumber,
			stepNumber: parseInt(stepNumber) as StepNumber,
			dayNumber: parseInt(dayNumber) as DayNumber,
			activityNumber: parseInt(activityNumber) as Activity,
		};
	};

	const onPressGo = () => {
		const { courseNumber, stepNumber, dayNumber, activityNumber } = getDestinationFromString(destination);
		console.log({ courseNumber, stepNumber, dayNumber, activityNumber });
		if (!courseNumber || !stepNumber || !dayNumber || !activityNumber) {
			console.error('tried to navigate to empty destination:', destination);
			return;
		}

		dispatch(setUserProgress(courseNumber, stepNumber, dayNumber, activityNumber));

		const courseDestination = CourseFromNumber[courseNumber];
		const stepDestination = StepFromNumber[stepNumber];
		navigate(stepEntryPoints[courseDestination]![stepDestination]!);
	};

	useEffect(() => {
		if (!destination) {
			setGoDisabled(true);
			return;
		}

		const {
			courseNumber,
			stepNumber,
			dayNumber,
			activityNumber,
		} = getDestinationFromString(destination);

		setGoDisabled(courseNumber === course
			&& stepNumber === step
			&& dayNumber === day
			&& activityNumber === activity);
	}, [
		activity,
		course,
		day,
		step,
		destination,
		setGoDisabled,
	]);

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
						inputIOS: styles.text,
						inputAndroid: styles.text,
						placeholder: styles.placeholderText,
						viewContainer: styles.pickerContainer,
					}}
				/>

				<Pressable style={styles.chevronContainer} onPress={() => picker.current?.togglePicker(true)}>
					<DownArrow2 />
				</Pressable>
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

	// String format for destinations.  An array or object would be nicer, but values and keys have to match, and we can't match on them without using immutable data structures.
	const currentMaxString = `${maxCourseNumber}-${maxStepNumber}-${maxDayNumber}-${maxActivityNumber}`;

	// values and keys must match.
	return [
		{ label: 'Step 1, Day 1', value: '1-1-1-1', key: '1-1-1-1' },
		(DEMO_MODE || maxDayNumber > 1 || maxStepNumber > 1) && { label: 'Step 1, Day 2', value: '1-1-2-1', key: '1-1-2-1' },
		(DEMO_MODE || maxDayNumber > 2 || maxStepNumber > 1) && { label: 'Step 1, Day 3', value: '1-1-3-1', key: '1-1-3-1' },
		(DEMO_MODE || maxDayNumber > 3 || maxStepNumber > 1) && { label: 'Step 1, Day 4', value: '1-1-4-1', key: '1-1-4-1' },
		(DEMO_MODE || maxDayNumber > 4 || maxStepNumber > 1) && { label: 'Step 1, Day 5', value: '1-1-5-1', key: '1-1-5-1' },
		(DEMO_MODE || maxDayNumber > 5 || maxStepNumber > 1) && { label: 'Step 1, Day 6', value: '1-1-6-1', key: '1-1-6-1' },
		(DEMO_MODE || maxDayNumber > 6 || maxStepNumber > 1) && { label: 'Step 1, Day 7', value: '1-1-1-1', key: '1-1-1-1' },
		(DEMO_MODE || maxStepNumber > 1) && { label: `Step 2: ${titles.step2}`, value: '1-2-1-1', key: '1-2-1-1' },
		(DEMO_MODE || maxStepNumber > 2) && { label: `Step 3: ${titles.step3}`, value: '1-3-1-1', key: '1-3-1-1' },
		(DEMO_MODE || maxStepNumber > 3) && { label: `Step 4: ${titles.step4}`, value: '1-4-1-1', key: '1-4-1-1' },
		(DEMO_MODE || maxStepNumber > 4) && { label: `Step 5: ${titles.step5}`, value: '1-5-1-1', key: '1-5-1-1' },
		(DEMO_MODE || maxStepNumber > 5) && { label: `Step 6: ${titles.step6}`, value: '1-6-1-1', key: '1-6-1-1' },
		(DEMO_MODE || maxStepNumber > 6) && { label: `Step 7: ${titles.step7}`, value: '1-7-1-1', key: '1-7-1-1' },
		(DEMO_MODE || maxStepNumber > 7) && { label: `Step 8: ${titles.step8}`, value: '2-8-1-1', key: '2-8-1-1' },
		(DEMO_MODE || maxStepNumber > 8) && { label: `Step 9: ${titles.step9}`, value: '2-9-1-1', key: '2-9-1-1' },
		(DEMO_MODE || maxStepNumber > 9) && { label: `Step 10: ${titles.step10}`, value: '2-10-1-1', key: '2-10-1-1' },
		(DEMO_MODE || maxStepNumber > 10) && { label: `Step 11: ${titles.step11}`, value: '2-11-1-1', key: '2-11-1-1' },
		(DEMO_MODE || maxStepNumber > 11) && { label: `Step 12: ${titles.step12}`, value: '2-12-1-1', key: '2-12-1-1' },
		(DEMO_MODE || maxStepNumber > 12) && { label: `Step 13: ${titles.step13}`, value: '2-13-1-1', key: '2-13-1-1' },
		(DEMO_MODE || maxStepNumber > 13) && { label: `Step 14: ${titles.step14}`, value: '2-14-1-1', key: '2-14-1-1' },
		(DEMO_MODE || maxCourseNumber > 1 || maxStepNumber > 1 || maxDayNumber > 1) && { label: `Current: Step ${maxStepNumber}, Day ${maxDayNumber}`, value: currentMaxString, key: currentMaxString },
	].filter(x => !!x) as Item[];
};
