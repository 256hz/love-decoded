import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey9}
		pageIndex={8}
		prompt="When I fail at something that’s important to me, I tend to feel alone in my failure."
		reverseScoring={true}
	/>
);
