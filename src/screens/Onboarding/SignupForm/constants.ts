export const MINUMUM_PASSWORD_LENGTH = 6;

export const errors = {
	name: 'Cannot be blank',
	email: 'Please provide a valid email address',
	password: `Enter at least ${MINUMUM_PASSWORD_LENGTH} characters`,
	passwordMatch: 'Passwords must match',
	gender: 'Select one',
	ageGroup: 'Select one',
};

export const ageGroupChoices = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map(digit => ({
	label: `${digit}0-${digit}9`,
	value: digit * 10,
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
