import { OnboardingScreen, MultiSelectSurvey } from '@elements';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { Screens } from 'route/OnboardingStack';
import { setSurveyResponse } from 'redux/action';
import { getSurveyByTitle } from 'redux/selector';
import { Surveys } from 'redux/types/survey';

import styles from './WhatWouldILikeToLearn.styles';

const options = [
	'Feel Better About Myself',
	'More Energy, Better Health',
	'Having Close, Loving Relationships',
	'Stop Resenting People',
	'Heal Important Relationships',
	'Control Anger with Love',
	"Stop People's Unloving Behaviors",
	'Stop Being a People Pleaser',
	'Exercise, Eat Healther, Meditate',
	'Learn Communication Skills',
	'Develop an Unconditional Community',
	'Learn the Power of Creating Visions',
];

export default () => {
	const dispatch = useDispatch();

	const surveyResponse = useSelector(getSurveyByTitle(Surveys.WhatWouldILikeToLearn)) as string[] || [];
	const existingCustomSelection = surveyResponse.find(response => !options.includes(response)) || '';
	const [ selections, setSelections ] = useState<string[]>(
		(surveyResponse as string[]).filter(response => options.includes(response)),
	);
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

		dispatch(setSurveyResponse(Surveys.WhatWouldILikeToLearn, response));
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.kavContainer}>
			<OnboardingScreen
				drawShapes={[ 1, 7, 11 ]}
				showLogo={true}
				title="What Would I Like To Learn from this Self-Love, Relationship Course?"
				audioFilename="onboarding-3-what-would-i-like-to-learn.mp3"
				nextTarget={Screens.HavingTheLovingCommunities}
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
						selectionContainerStyle={styles.selectionContainer}
						selectionTextStyle={styles.selectionText}
						toggleSelected={toggleSelected}
					/>
				</View>
			</OnboardingScreen>
		</KeyboardAvoidingView>
	);
};
