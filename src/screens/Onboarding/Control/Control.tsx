import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { OnboardingScreens } from 'route/enums';
import { setSurveyResponse } from '@redux/action';
import { IRadioButton } from '@elements/RadioButtons/RadioButtons';
import { OnboardingScreen, RadioButtons } from '@elements';
import { Surveys } from 'redux/types/survey';
import styles from './Control.styles';

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

	return (
		<OnboardingScreen
			drawShapes={[ 1, 7, 11 ]}
			audioFilename="onboarding_9_control.mp3"
			nextTarget={OnboardingScreens.TheJourneyStartsNow}
			title="Control"
			onNextCallback={() => dispatch(setSurveyResponse(Surveys.CanYouControlIt, selectedValue))}
			nextEnabled={selectedValue !== ''}
		>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.body}>
						{'It saddens many people that they have little control over love. People who know they\nwere'}
						<Text style={[ styles.body, styles.highlight, styles.bold ]}>
							{' Born To Be Loved '}
						</Text>
						can <Text style={[ styles.body, styles.bold ]}>{'control\n'}</Text> how much love others give them.
					</Text>
				</View>

				<View style={styles.radioButtonsContainer}>
					<Text style={styles.subtitle}>Can You Control It?</Text>
					<RadioButtons
						buttons={radioButtons}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</View>
			</View>
		</OnboardingScreen>
	);
};
