export const MINIMUM_PASSWORD_LENGTH = 6;
export const errors = {
	name: 'Cannot be blank',
	email: 'Please provide a valid email address',
	password: `Enter at least ${MINIMUM_PASSWORD_LENGTH} characters`,
	passwordMatch: 'Passwords must match',
	gender: 'Select one',
	ageGroup: 'Select one',
};

export const ageGroupChoices = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ].map(startingAge => ({
	label: `${startingAge}-${startingAge + 9}`,
	value: `${startingAge}-${startingAge + 9}`,
}));

export enum GenderValues {
	Female = 'f',
	Male = 'm',
	Nonbinary = 'nb',
	Other = 'other',
}

export const genderChoices = [
	{
		label: 'Female',
		value: GenderValues.Female,
	},
	{
		label: 'Male',
		value: GenderValues.Male,
	},
	{
		label: 'Non-binary',
		value: GenderValues.Nonbinary,
	},
	{
		label: 'Other',
		value: GenderValues.Other,
	},
];
