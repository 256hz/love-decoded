import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'How do you know if a communication is effective?',
	'1. It almost always will resolve the problem.',
	'2. It strengthens the relationship, bringing the two of you closer.',
];

export default () => <IntentionScreen prompts={prompts} />;
