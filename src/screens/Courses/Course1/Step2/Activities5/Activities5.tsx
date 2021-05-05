import React from 'react';
import ActivitiesShare from '@screens/Courses/Common/ActivitiesShare';

export default () => {
	const prompts = [
		'Becoming aware of their Self-Talk will support their own respective journeys toward having a healthy, loving relationship with themselves.',
		'Sharing your work with self-talk with people close to you will help them become aware of their own self-talk.',
	];

	const linesToShare = [
		'line1',
		'line2',
	];

	return (
		<ActivitiesShare prompts={prompts} linesToShare={linesToShare} />
	);
};
