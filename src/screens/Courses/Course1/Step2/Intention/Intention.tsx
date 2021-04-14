import React from 'react';
import IntentionScreen from 'screens/Courses/IntentionScreen';

const prompts = [
	'1.  Which qualities do you value most in other people?',
	'2.  Which are the qualities that people like about you?',
	'3.  Which qualities do you like about yourself?',
	'4.  Which is the nicest compliment you’ve ever received?',
];

export default () => <IntentionScreen prompts={prompts} />;
