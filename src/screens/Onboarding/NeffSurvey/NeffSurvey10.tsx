import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey11}
		pageIndex={10}
		prompt="When I feel inadequate in some way, I try to remind myself that feelings of inadequacy are shared by most people."
	/>
);
