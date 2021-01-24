import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
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
	const surveyResponse = useSelector(getSurveyByTitle(Surveys.Dependency));

	return (
		<OnboardingScreen
			drawShapes={[ 1, 7, 11 ]}
			audioFilename="music128.mp3"
			nextTarget={Screens.NavigatingTheStructure}
			title="Dependency"
			titleContainerStyle={styles.titleContainer}
			onNextCallback={() => dispatch(setSurveyResponse(Surveys.Dependency, selectedValue))}
			nextEnabled={selectedValue !== ''}
		>
			<View style={styles.container}>
				<View style={styles.textContainer}>
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
					<Text style={[ styles.body, styles.highlight, styles.bold ]}>
						How does that make you feel?
					</Text>
				</View>

			</View>

		</OnboardingScreen>
	);
};
