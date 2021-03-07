import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey6}
		pageIndex={5}
		prompt="I try to see my failings as part of the human condition."
	/>
);
