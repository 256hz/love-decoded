import { OnboardingScreen, MultiSelectSurvey } from '@elements';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import { setSurveyResponse } from 'redux/action';
import { getSurveyByTitle } from 'redux/selector';
import { Surveys } from 'redux/types/survey';

import styles from './AcknowledgingYourPast.styles';

const options = [
	'Siblings',
	'Friends',
	'Colleagues',
	'Parents',
	'Teachers',
	'First Love',
	'Fellow Students',
	'Body Image',
	'A Lack Of Romance',
	'Not Being Appreciated',
	'Not Being Respected',
];

export default () => {
	const dispatch = useDispatch();

	const surveyResponse = useSelector(getSurveyByTitle(Surveys.AcknowledgingYourPast)) as string[] || [];

	const defaultSelection = surveyResponse.filter(response => options.includes(response));
	const [ selections, setSelections ] = useState<string[]>(defaultSelection);

	const existingCustomSelection = surveyResponse.find(response => !options.includes(response)) || '';
	const [ customSelection, setCustomSelection ] = useState(existingCustomSelection);

	const toggleSelected = (option: string) => {
		// clear out any unwanted custom selections from a previous session
		const filteredSelections = selections.filter(selected => options.includes(selected));

		filteredSelections.includes(option)
			? setSelections(filteredSelections.filter(selection => selection !== option))
			: setSelections([ ...filteredSelections, option ]);
	};

	const submitResponse = () => {
		if (!options.length) {
			return;
		}

		const response = [ ...selections ];
		if (customSelection !== '') {
			response.push(customSelection);
		}

		dispatch(setSurveyResponse(Surveys.AcknowledgingYourPast, response));
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.kavContainer}>
			<OnboardingScreen
				drawShapes={[ 1, 7, 11 ]}
				showLogo={true}
				title="Acknowleding Your Past and Present Sources of Pain"
				audioFilename="onboarding-2-sources-of-pain.mp3"
				nextTarget={Screens.WhatWouldILikeToLearn}
				onNextCallback={submitResponse}
			>
				<View style={styles.container}>
					<View style={styles.topTextContainer}>
						<Text style={styles.topText}>
							(scroll and select all that apply)
						</Text>
					</View>
					<MultiSelectSurvey
						customSelection={customSelection}
						options={options}
						selections={selections}
						setCustomSelection={setCustomSelection}
						toggleSelected={toggleSelected}
					/>
				</View>
			</OnboardingScreen>
		</KeyboardAvoidingView>
	);
};
