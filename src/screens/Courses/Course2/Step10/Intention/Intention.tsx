import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Like the child who breaks something and defends himself with “I didn’t do it.” we’d rather try to excuse our behavior than admit to it and apologize. We’re afraid of punishment and the withdrawal of love. Yet, it is loving to both ourselves and those we upset, to say “I am sorry.”',
	//'Which of your unlovable qualities describe the most common ways you treat others unlovingly? Example: Being Disrespectful.',
	//'When people react to you as if you hurt their feelings, do you find out if you did something to hurt their feelings? Or are they just being  “too sensitive?”',
];

export default () => <IntentionScreen prompts={prompts} />;
