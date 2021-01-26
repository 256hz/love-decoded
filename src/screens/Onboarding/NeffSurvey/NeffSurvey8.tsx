import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/OnboardingStack';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey9}
		pageIndex={8}
		prompt="When I fail at something that’s important to me, I tend to feel alone in my failure. "
	/>
);
