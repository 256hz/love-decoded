import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Becoming aware of how others mistreat you can be both upsetting and painful. You might have put up with it for too long. Being mistreated is not acceptable.',
	'1. What words describe the most common ways others  mistreat you?',
	'2. How does being mistreated feel?',
	'3. Do you deserve to be mistreated?',
	'4. Are you willing to stop people from mistreating you?',
];

export default () => <IntentionScreen prompts={prompts} />;
