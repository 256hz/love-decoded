import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey2}
		pageIndex={1}
		prompt="When I fail at something important to me I become consumed by feelings of inadequacy."
		reverseScoring={true}
	/>
);
