import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey12}
		pageIndex={11}
		prompt="I’m disapproving and judgmental about my own flaws and inadequacies."
		reverseScoring={true}
	/>
);
