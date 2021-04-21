import React from 'react';
import IntentionScreen from 'screens/Courses/Common/IntentionScreen';

const prompts = [
	'Creating a personal vision doesn’t come naturally to us. It requires clarity about what you want in the relationship with yourSelf and others. It necessitates writing things down, just like a business plan that guides you step by step.',
	'1. Habitual thinking and behavior reinforces your belief that things can’t change.',
	'2. This assures that you produce the same negative results over and over.',
	'3. Working towards a new vision makes it possible to put aside your past frustrations and failures.',
	'4. Focusing on your vision, what you want to achieve, moves you ever closer to that goal - much like a GPS.',
];

export default () => <IntentionScreen prompts={prompts} />;
