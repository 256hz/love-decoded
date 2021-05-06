import React from 'react';
import ActivitiesShare from '@screens/Courses/Common/ActivitiesShare';

export default () => {
	const prompts = [
		'Learning to create effective communication is the life blood of all relationships - with ourselves and others.',
		'The way for us to become better and better at communicating is to practice it  with our community. They will ask questions and we will try  to answer them. It is all part of learning.',
	];

	const linesToShare = [
		'line1',
		'line2',
	];

	return (
		<ActivitiesShare prompts={prompts} linesToShare={linesToShare} />
	);
};
