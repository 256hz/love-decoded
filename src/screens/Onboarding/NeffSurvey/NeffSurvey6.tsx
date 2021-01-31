import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/OnboardingStack';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey7}
		pageIndex={6}
		prompt="When I’m going through a very hard time, I give myself the caring and tenderness I need."
	/>
);
