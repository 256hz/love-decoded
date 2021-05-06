import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Three contexts are essential:',
	'- people are doing the best they can',
	'- the relationship we have is more important the upset and,',
	'- you did not hurt, upset, or disappoint me on purpose (removes all blame).',
];

export default () => <IntentionScreen prompts={prompts} />;
