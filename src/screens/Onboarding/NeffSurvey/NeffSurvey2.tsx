import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/OnboardingStack';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey3}
		pageIndex={2}
		prompt="I try to be understanding and patient towards those aspects of my personality I don’t like."
	/>
);
