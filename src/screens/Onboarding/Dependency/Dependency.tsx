import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import { setSurveyResponse } from '@redux/action';
import { IRadioButton } from '@elements/RadioButtons/RadioButtons';
import { OnboardingScreen, RadioButtons } from '@elements';
import { Surveys } from 'redux/types/survey';
import { getSurveyByTitle } from 'redux/selector';
import styles from './Dependency.styles';

const radioButtons: IRadioButton[] = [
	{
		label: 'Yes',
		value: 'Yes',
	},
	{
		label: 'No',
		value: 'No',
	},
];

export default () => {
	const dispatch = useDispatch();
	const [ selectedValue, setSelectedValue ] = useState('');
	const surveyResponse = useSelector(getSurveyByTitle(Surveys.Dependency)) as string;

	return (
		<OnboardingScreen
			drawShapes={[ 1, 7, 11 ]}
			audioFilename="onboarding_15_dependency.mp3"
			nextTarget={OnboardingScreens.NavigatingTheStructure}
			title="Dependency"
			titleContainerStyle={styles.titleContainer}
			onPressNext={() => dispatch(setSurveyResponse(Surveys.Dependency, selectedValue))}
			nextEnabled={!!(selectedValue || surveyResponse)}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.body}>
						Have you come to realize that being dependent on others for Love can be
						<Text style={[ styles.body, styles.bold ]}>
							{' Painful?'}
						</Text>
					</Text>
				</View>

				<View style={styles.radioButtonsContainer}>
					<RadioButtons
						buttons={radioButtons}
						selectedValue={selectedValue || surveyResponse}
						setSelectedValue={setSelectedValue}
					/>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.body}>
						Research shows that over 95% of people answered Yes to this question.
					</Text>
					<View style={{ width: '100%', height: 20 }} />
					<Text style={[ styles.body, styles.highlight, styles.bold ]}>
						How does that make you feel?
					</Text>
				</View>

			</View>
		</OnboardingScreen>
	);
};
