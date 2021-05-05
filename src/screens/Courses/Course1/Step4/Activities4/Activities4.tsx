import React from 'react';
import ActivitiesShare from '@screens/Courses/Common/ActivitiesShare';

export default () => {
	const prompts = [
		'Learning to create clear visions for who we want to become and and how we want to transform certain situations in our life may be a new idea.',
		'The way for us to become better and better at writing is to share them with our community. They will ask questions and we will try to answer them. It is all part of learning.',
	];

	const linesToShare = [
		'line1',
		'line2',
	];

	return (
		<ActivitiesShare prompts={prompts} linesToShare={linesToShare} />
	);
};
