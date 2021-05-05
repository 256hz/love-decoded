import React from 'react';
import IntentionScreen from 'screens/Courses/Common/IntentionScreen';

const prompts = [
	'Self-talk refers to that “little voice in your head” – that goes on 24/7.',
	'Are you aware of your negative self-talk? Start listening to yourself.',
	'You will learn how to translate negative self-talk into positive self-talk.',
	'Negative self-talk exhausts us - positive self-talk Nourishes us.',
];

export default () => <IntentionScreen prompts={prompts} />;
