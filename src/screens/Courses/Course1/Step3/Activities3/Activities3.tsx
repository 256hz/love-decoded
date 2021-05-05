import React from 'react';
import ActivitiesShare from 'screens/Courses/Common/ActivitiesShare';

export default () => {
	const prompts = [
		'Becoming aware of some their unloving behaviors  will support their own respective journeys toward having a healthy, loving relationship with themselves.',
		'Sharing your unloveable qualities with people close to you will help them become aware of their own  and interested in transforming them.',
	];

	const linesToShare = [
		'line1',
		'line2',
	];

	return (
		<ActivitiesShare prompts={prompts} linesToShare={linesToShare} />
	);
};
