import React from 'react';
import ActivitiesShare from 'screens/Courses/Common/ActivitiesShare';

export default () => {
	const linesToShare = [
		'line1',
		'line2',
	];

	return (
		<ActivitiesShare linesToShare={linesToShare} />
	);
};
