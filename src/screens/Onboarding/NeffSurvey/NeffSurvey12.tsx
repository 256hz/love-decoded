import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/OnboardingStack';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurveyIntro}
		pageIndex={12}
		prompt="I’m intolerant and impatient towards those aspects of my personality I don’t like."
		reverseScoring={true}
	/>
);
