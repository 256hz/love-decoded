import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Since you know that Love is an essential nourishment, like food and water, you  need to consume  your portion of this nourishing energy in the Morning, as well as at Lunchtime, Dinnertime, and Bedtime. You want it to become a healthy habit.',
	'1. What are your morning rituals, the ones you do every day?',
	'2. Does it feel silly to say “...because I love myself.” as you do them?',
	'3. Can you give yourself permission to say it anyway?',
	'4. What healthy habits have you acquired over time?',
];

export default () => <IntentionScreen prompts={prompts} />;
