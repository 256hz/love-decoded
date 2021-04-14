import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { CourseScreens } from 'route/enums';
import { Slider, StepScreen } from '@elements';
import { getDaySurvey, getUserProgress } from '@redux/selector';
import { setDaySurveyResponse } from '@redux/action';
import {
	Days,
	HowAreYouFeelingResponse,
	Steps,
	Surveys,
} from '@redux/types/survey';
import styles from './IntentionScreen.styles';

const getAudioFilename = (currentStep: Steps, currentDay: Days) => (
	`${currentStep}_${currentDay}_intentions.mp3`
);

type Props = {
	prompts: string[],
};

export default ({ prompts }: Props) => {
	const dispatch = useDispatch();
	const { currentCourse, currentStep, currentDay } = useSelector(getUserProgress);

	const response = useSelector(getDaySurvey(currentCourse, currentStep, currentDay, Surveys.HowAreYouFeeling));

	const setResponse = (number: HowAreYouFeelingResponse) => {
		dispatch(setDaySurveyResponse(currentCourse, currentStep, currentDay, Surveys.HowAreYouFeeling, number));
	};

	return (
		<StepScreen
			audioFilename={getAudioFilename(currentStep, currentDay)}
			nextTarget={CourseScreens.GoodJob}
		>
			<View>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, { textAlign: 'center' } ]}>
							On a scale from 1-10, How are you feeling today?
						</Text>
					</View>

					<View style={styles.sliderContainer}>
						<Slider onValueChanged={setResponse} value={response} />
					</View>

					{ prompts.map(prompt => (
						<Prompt prompt={prompt} key={prompt} />
					))}

				</View>
			</View>
		</StepScreen>
	);
};

const Prompt = ({ prompt }: { prompt: string }) => (
	<View style={styles.textItemContainer}>
		<Text style={styles.bodyText}>
			{prompt}
		</Text>
	</View>
);
