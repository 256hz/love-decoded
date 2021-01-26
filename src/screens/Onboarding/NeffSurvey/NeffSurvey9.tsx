import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/OnboardingStack';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey10}
		pageIndex={9}
		prompt="When something upsets me, I try to keep my emotions in balance."
	/>
);
