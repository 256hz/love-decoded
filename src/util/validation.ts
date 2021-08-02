export const MINIMUM_PASSWORD_LENGTH = 6;

export const isEmail = (address: string) => {
	const splitAt = address.split('@');

	return splitAt.length === 2 && splitAt[1].split('.').length >= 2;
};

export const isPasswordAllowed = (passwordToCheck: string) => {
	return passwordToCheck.length >= MINIMUM_PASSWORD_LENGTH
		&& passwordToCheck.match(/[\w\d_. !@#$%^&*()-]+/g);
};
