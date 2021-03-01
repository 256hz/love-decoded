import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey5}
		pageIndex={4}
		prompt="When I’m feeling down, I tend to feel like most other people are probably happier than I am."
		reverseScoring={true}
	/>
);
