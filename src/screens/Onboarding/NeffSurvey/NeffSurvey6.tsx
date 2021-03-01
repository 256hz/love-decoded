import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { OnboardingScreens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={OnboardingScreens.NeffSurvey7}
		pageIndex={6}
		prompt="When I’m going through a very hard time, I give myself the caring and tenderness I need."
	/>
);
