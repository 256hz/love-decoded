import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Which unlovable behaviors toward yourself hurt or upset you the most?',
	'Which 2-3 qualities/behaviors about yourself would you like to transform?',
	'Which one quality/behavior do you want to start with?',
];

export default () => <IntentionScreen prompts={prompts} />;
