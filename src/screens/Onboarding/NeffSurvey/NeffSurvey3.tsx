import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey4}
		pageIndex={3}
		prompt="When something painful happens I try to take a balanced view of the situation."
	/>
);
