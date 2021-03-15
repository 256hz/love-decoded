import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurveyThankYou}
		pageIndex={12}
		prompt="I’m intolerant and impatient towards those aspects of my personality I don’t like."
		reverseScoring
	/>
);
