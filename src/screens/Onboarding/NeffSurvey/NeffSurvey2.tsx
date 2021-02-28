import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey3}
		pageIndex={2}
		prompt="I try to be understanding and patient towards those aspects of my personality I don’t like."
	/>
);
