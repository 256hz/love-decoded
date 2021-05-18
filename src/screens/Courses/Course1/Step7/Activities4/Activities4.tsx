import React from 'react';
import ActivitiesShare from '@screens/Courses/Common/ActivitiesShare';

export default () => {
	const prompts = [
		'Learning to mirror can seem silly to some people. Also, most people aren’t good at it in the beginning. This is why practicing is so important. You can practice by talking about just about anything - like it’s a rainy day, or make up a problem that’s not real.',
	];

	const linesToShare = [
		'line1',
		'line2',
	];

	return (
		<ActivitiesShare prompts={prompts} linesToShare={linesToShare} />
	);
};
