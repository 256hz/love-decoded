import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey8}
		pageIndex={7}
		prompt="When something upsets me I have a hard time keeping my emotions in balance."
	/>
);
