import { Contact } from 'react-native-contacts';

export const mockContacts = [ {
	recordID: '6b2237ee0df85980',
	emailAddresses: [ {
		label: 'personal',
		email: 'sheila.johnson@hotmail.com',
	} ],
	familyName: 'Johnson',
	givenName: 'Sheila',
	phoneNumbers: [ {
		label: 'home',
		number: '(555) 555-1234',
	}, {
		label: 'mobile',
		number: '+1 (555) 555-5678',
	} ],
}, {
	recordID: 'b2237ee0df859806',
	emailAddresses: [ {
		label: 'private',
		email: 'karl.young330@gmail.com',
	}, {
		label: 'work',
		email: 'k.young@your-personal-staffer.com',
	} ],
	familyName: 'Young',
	givenName: 'Karl',
	phoneNumbers: [ {
		label: 'mobile',
		number: '(555) 555-1234',
	} ],
}, {
	recordID: '2237ee0df859806b',
	emailAddresses: [ {
		label: 'personal email (please use sparingly)',
		email: 'go.girl.maya@yahoo.com',
	}, {
		label: 'work',
		email: 'yousafzim@id-university.edu',
	}, {
		label: 'whole family email address',
		email: 'yousafzi.family12356780@boingomail.org',
	} ],
	familyName: 'Maya',
	givenName: 'Yousafzi',
	phoneNumbers: [ {
		label: 'mobile (only answers 9a-5p)',
		number: '(555) 555-1234',
	} ],
}, {
	recordID: '237ee0df859806b2',
	emailAddresses: [ {
		email: 'starship.eden9000@verizon.net',
	} ],
	familyName: 'Skarsgård',
	givenName: '姜峯楠',
	phoneNumbers: [ {
		number: '(555) 555-1234',
	}, {
		label: 'mobile (only answers 9a-5p)',
		number: '+22 (555) 555-1234 ext. 1675309',
	} ],
},
] as Contact[];
