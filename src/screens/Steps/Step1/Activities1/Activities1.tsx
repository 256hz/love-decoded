import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import ListTextInput, { SingleBullet } from '@elements/ListTextInput/ListTextInput';
import Info from '@assets/svg/info.svg';
import { StepScreens } from 'route/enums';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getStepSurvey, getUserProgress } from 'redux/selector';
import {
	Activities, Courses, DayFromNumber, Steps,
} from 'redux/types/survey';
import { setStepSurveyResponse } from 'redux/action';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const { currentDay } = useSelector(getUserProgress);
	const savedResponse = useSelector(
		getStepSurvey(Courses.One, Steps.One, DayFromNumber[currentDay], Activities.LovableQualitiesSelf),
	);

	const setResponse = (text: string) => {
		dispatch(setStepSurveyResponse(Courses.One, Steps.One, DayFromNumber[currentDay], Activities.LovableQualitiesSelf, text));
	};

	const onPressInfoBubble = () => {
		console.log('info');
	};

	return (
		<StepScreen
			nextTarget={StepScreens.Step1Activities2}
			audioFilename="one_second_silence.mp3"
			// scrollDisabled
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							{'Let\'s'} start by <Text style={styles.boldText}>creating a list of your loveable qualities</Text> which you can share.
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={styles.bodyText}>
							Keep adding to your list and learning it.
						</Text>

						<TouchableOpacity onPress={onPressInfoBubble}>
							<View style={styles.infoBubble}>
								<Info />
							</View>
						</TouchableOpacity>
					</View>

					<ListTextInput
						containerStyle={styles.textInputContainer}
						text={savedResponse || SingleBullet}
						setText={setResponse}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
