import React from 'react';
import ActivitiesShare from '@screens/Courses/Common/ActivitiesShare';

export default () => {
	const prompts = [
		'Learning to frame good communications depends on using the three points:',
		' \u2022 people are doing the best they can',
		' \u2022 the relationship we have is more\n   important than the upset, and',
		' \u2022 you did not hurt, upset, or disappoint me on\n   purpose (removes all blame).',
		'Practicing this with friends and family is key to mastering how to frame communications.',
	];

	const linesToShare = [
		'line1',
		'line2',
	];

	return (
		<ActivitiesShare prompts={prompts} linesToShare={linesToShare} />
	);
};
