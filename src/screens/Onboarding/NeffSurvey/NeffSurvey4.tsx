import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey5}
		pageIndex={4}
		prompt="When I’m feeling down, I tend to feel like most other people are probably happier than I am."
		reverseScoring
	/>
);
