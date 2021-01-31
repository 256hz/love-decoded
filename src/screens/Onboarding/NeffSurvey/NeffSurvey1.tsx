import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/OnboardingStack';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey2}
		pageIndex={1}
		prompt="When I fail at something important to me I become consumed by feelings of inadequacy."
		reverseScoring={true}
	/>
);
