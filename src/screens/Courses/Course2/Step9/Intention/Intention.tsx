import React from 'react';
import IntentionScreen from '@screens/Courses/Common/IntentionScreen';

const prompts = [
	'There are some obvious ways we mistreat ourselves. Others can see it and they try to point it out. Then there are less obvious ways - and when others point to them we get defensive, even angry.',
	'1. Meditating or asking others helps us identify ways we mistreat ourselves.',
	'2. What is one obvious way you treat yourself unlovingly?',
	'3. What is one less obvious way you mistreat yourself?',
	'4. Who in your community can you ask to gently nudge you when you treat yourself unlovingly?',
];

export default () => <IntentionScreen prompts={prompts} />;
