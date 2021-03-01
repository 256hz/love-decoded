import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey11}
		pageIndex={10}
		prompt="When I feel inadequate in some way, I try to remind myself that feelings of inadequacy are shared by most people."
	/>
);
