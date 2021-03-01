import React from 'react';
import { NeffSurveyScreen } from '@elements';
import { Screens } from 'route/enums';

export default () => (
	<NeffSurveyScreen
		nextTarget={Screens.NeffSurvey8}
		pageIndex={7}
		prompt="When something upsets me I have a hard time keeping my emotions in balance."
	/>
);
