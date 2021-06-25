import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Dealing with our hurt effectively and lovingly are vital aspects of healthy relationships – with ourselves and others. We can’t really forgive others without communicating that their behavior hurt us. But how we do it is essential to them  hearing us and saying they are sorry.',
	'1. Can I forgive another person, in the moment, to avoid resenting them?',
	'2. Did they hurt me on purpose or was it a mistake?',
	'3. Can I overcome the hurt they caused me?',
	'4. How can I forgive others for their mistakes? ',
];

export default () => <IntentionScreen prompts={prompts} />;
