import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'Listening to a complaint about our behavior makes us feel uncomfortable. You start thinking about your best defense, instead of paying close attention to the other person. That makes people feel like you don’t care about them. Mirroring is simply repeating what the other says – whether you like it or not - which makes the person who’s upset with you feel SAFE to continue.',
];

export default () => <IntentionScreen prompts={prompts} />;
