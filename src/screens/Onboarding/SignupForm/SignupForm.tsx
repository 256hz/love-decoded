import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingScreen } from '@elements';
import styles from './SignupForm.styles';

const errors = {
	name: 'Enter at least one letter',
	email: 'Please provide a valid email address',
	password: 'Must be at least 6 letters, numbers, or one of: !@#$%^&*()_.-',
	passwordMatch: 'Passwords must match',
	gender: 'Enter a gender',
	age: 'Select an age group',
};

const ErrorText = ({ text }) => (
	<View style={styles.errorContainer}>
		<Text style={styles.errorText}>{text}</Text>
	</View>
);

export default () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ validateOnTextEntry, setValidateOnTextEntry ] = useState(false);

	const [ hasErrors, setHasErrors ] = useState({
		firstName: false,
		lastName: false,
		email: false,
		password: false,
		passwordMatch: false,
		gender: false,
		age: false,
	});

	const isEmail = (address: string) => {
		const splitAt = address.split('@');

		return splitAt.length === 2 && splitAt[1].split('.').length === 2;
	};

	const isPasswordAllowed = useCallback((passwordToCheck: string) => {
		return passwordToCheck.length > 6
			&& password.match(/[\w\d_. !@#$%^&*()-]+/g);
	}, [ password ]);

	const isSubmitEnabled = isPasswordAllowed(password)
		&& password === confirmPassword
		&& firstName.length > 1
		&& lastName.length > 1
		&& isEmail(email);

	const onSubmit = () => {
		setValidateOnTextEntry(true);
		validateInputs();

		if (Object.values(hasErrors).every(error => !error)) {
			console.log('submit:', { firstName, lastName, email, password, confirmPassword });
		}
	};

	const validateInputs = () => {
		const tempErrors = { ...hasErrors };

		tempErrors.firstName = !firstName.length;
		tempErrors.lastName = !firstName.length;
		tempErrors.email = !!email.length && !isEmail(email);
		tempErrors.password = !!password.length && !isPasswordAllowed(password);
		tempErrors.passwordMatch = !!password.length && !!confirmPassword.length && password !== confirmPassword;

		setHasErrors(tempErrors);
	};

	return (
		<OnboardingScreen
			title="Sign Up"
			titleContainerStyle={styles.titlePadding}
			drawShapes={[ 17, 7 ]}
			customButtons={<></>}
		>

			<ScrollView style={styles.container}>

				<View style={styles.nameContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="first name"
						onChangeText={setFirstName}
						onEndEditing={validateInputs}
						value={firstName}
					/>
					{ hasErrors.firstName && <ErrorText text={errors.name} /> }
					<TextInput
						style={styles.textInput}
						placeholder="last name"
						onChangeText={setLastName}
						onEndEditing={validateInputs}
						value={lastName}
					/>
					{ hasErrors.lastName && <ErrorText text={errors.name} /> }
				</View>

				<View style={styles.emailContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="email"
						onChangeText={setEmail}
						onEndEditing={validateInputs}
						value={email}
					/>
					{ hasErrors.email && <ErrorText text={errors.email} />}
				</View>

				<TextInput
					style={styles.textInput}
					placeholder="password"
					onChangeText={setPassword}
					onEndEditing={validateInputs}
					value={password}
					secureTextEntry={true}
				/>
				{ hasErrors.password && <ErrorText text={errors.password} />}
				<TextInput
					style={styles.textInput}
					placeholder="confirm password"
					onChangeText={setConfirmPassword}
					onEndEditing={validateInputs}
					value={confirmPassword}
					secureTextEntry={true}
				/>
				{ hasErrors.passwordMatch && <ErrorText text={errors.passwordMatch} />}

				<View style={styles.genderAndAgeContainer}>
					<View style={[ styles.textInput, styles.dropdown ]}>
						<View />
						{ hasErrors.gender && <ErrorText text={errors.gender} />}
					</View>

					<View style={[ styles.textInput, styles.dropdown ]}>
						<View />
						{ hasErrors.age && <ErrorText text={errors.age} />}
					</View>
				</View>

				<View style={styles.termsContainer}>
					<Text style={styles.termsText}>By tapping, you agree to our</Text>
					<View style={styles.linksContainer}>
						<TouchableOpacity onPress={() => console.log('terms')}>
							<Text style={[ styles.termsText, styles.termsLink ]}>
								Terms
							</Text>
						</TouchableOpacity>
						<Text style={styles.termsText}>and</Text>
						<TouchableOpacity onPress={() => console.log('privacy')}>
							<Text style={[ styles.termsText, styles.termsLink ]}>
								Privacy Policy
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={onSubmit} disabled={!isSubmitEnabled && validateOnTextEntry}>
						<View style={[
							styles.button,
							!isSubmitEnabled && validateOnTextEntry && styles.disabled,
						]}>
							<Text style={styles.buttonText}>
								Submit
							</Text>
						</View>
					</TouchableOpacity>
				</View>

			</ScrollView>
		</OnboardingScreen>
	);
};
