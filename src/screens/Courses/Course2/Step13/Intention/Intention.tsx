import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'We all make mistakes in life...it is part of being human. Our parents often yelled at us when we did. Without realizing it we imitate this unloving behavior toward us as our parents’ critical voices have become our critical voice.',
	'1. Can you think of mistakes you made, small or large, that hurt or upset you, which you haven’t dealt with?',
	'2. What does your critical voice say about them?',
	'3. Have you ever thought about forgiving yourself?',
	'4. Have you ever told yourself that you did your best?',
];

export default () => <IntentionScreen prompts={prompts} />;
