import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey10}
		pageIndex={9}
		prompt="When something upsets me, I try to keep my emotions in balance."
		reverseScoring
	/>
);
