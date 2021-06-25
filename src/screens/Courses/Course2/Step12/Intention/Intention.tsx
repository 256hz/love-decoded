import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Letting go of resentments can feel like you are forgiving someone who doesn’t deserve to be forgiven. The truth is you don’t deserve to carry around the “baggage” of having been mistreated. Resentment is a poor substitute for resolving a problem.',
	'1. Which resentments, based on hurts, are still haunting you?',
	'2. Which ones do you hold against yourself?',
	'3. Which ones do you hold against others?',
	'4. Do you understand that it is imperative for your wellbeing to let go of resentments?',
];

export default () => <IntentionScreen prompts={prompts} />;
