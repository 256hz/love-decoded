import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey6}
		pageIndex={5}
		prompt="I try to see my failings as part of the human condition."
	/>
);
