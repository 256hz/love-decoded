import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey4}
		pageIndex={3}
		prompt="When something painful happens I try to take a balanced view of the situation."
	/>
);
