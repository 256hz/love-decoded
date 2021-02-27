import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	View, Text, KeyboardAvoidingView, Platform,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Spinner } from 'react-native-material-kit';
import { OnboardingScreen } from '@elements';
import colors from '@elements/globalStyles/color';
import { Screens } from 'route/OnboardingStack';
import styles from './SignupForm.styles';

const MINUMUM_PASSWORD_LENGTH = 6;

const errors = {
	name: 'Cannot be blank',
	email: 'Please provide a valid email address',
	password: `Enter at least ${MINUMUM_PASSWORD_LENGTH} characters`,
	passwordMatch: 'Passwords must match',
	gender: 'Select one',
	ageGroup: 'Select one',
};

const ageGroupChoices = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map(digit => ({
	label: `${digit}0-${digit}9`,
	value: digit * 10,
}));

enum GenderValues {
	Female = 'f',
	Male = 'm',
	Nonbinary = 'nb',
	Other = 'other',
}

const genderChoices = [
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

const ErrorText = ({ text }) => (
	<View style={styles.errorContainer}>
		<Text style={styles.errorText}>{text}</Text>
	</View>
);

export default () => {
	const { navigate } = useNavigation();

	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ gender, setGender ] = useState('');
	const [ showGenderTextInput, setShowGenderTextInput ] = useState(false);
	const [ customGender, setCustomGender ] = useState('');
	const [ ageGroup, setAgeGroup ] = useState('');
	const [ waitingForBackend, setWaitingForBackend ] = useState(false);

	const [ hasErrors, setHasErrors ] = useState({
		firstName: false,
		lastName: false,
		email: false,
		password: false,
		passwordMatch: false,
		gender: false,
		ageGroup: false,
		customGender: false,
	});

	const isEmail = (address: string) => {
		const splitAt = address.split('@');

		return splitAt.length === 2 && splitAt[1].split('.').length === 2;
	};

	const isPasswordAllowed = useCallback((passwordToCheck: string) => {
		return passwordToCheck.length >= 6
			&& password.match(/[\w\d_. !@#$%^&*()-]+/g);
	}, [ password ]);

	const isSubmitEnabled = isPasswordAllowed(password)
		&& password === confirmPassword
		&& firstName.length
		&& lastName.length
		&& isEmail(email)
		&& Object.values(hasErrors).every(error => !error);

	const validateInputs = () => {
		setTimeout(() => {
			const tempErrors = { ...hasErrors };

			tempErrors.firstName = !firstName.length;
			tempErrors.lastName = !firstName.length;
			tempErrors.email = !!email.length && !isEmail(email);
			tempErrors.password = !!password.length && !isPasswordAllowed(password);
			tempErrors.passwordMatch = !!password.length && !!confirmPassword.length && password !== confirmPassword;
			tempErrors.gender = !gender;
			tempErrors.ageGroup = !ageGroup;
			tempErrors.customGender = gender === 'other' && !customGender;

			setHasErrors(tempErrors);
		}, 1000);
	};

	const handleSetGender = (value: string) => {
		setGender(value);

		if (value === 'other') {
			setShowGenderTextInput(true);
			return;
		}

		validateInputs();
		setCustomGender('');
		setShowGenderTextInput(false);
	};

	const handleSetAgeGroup = (value: string) => {
		setAgeGroup(value);
		validateInputs();
	};

	const onSubmit = () => {
		console.log('submit:', {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			gender: customGender || gender,
			ageGroup,
		});
		setWaitingForBackend(true);
		setTimeout(() => {
			navigate(Screens.ThankYouForSigningUp);
		}, 2500);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.select({ ios: 'padding' })}
			style={styles.kavContainer}
		>

			<OnboardingScreen
				title="Sign Up"
				titleContainerStyle={styles.titlePadding}
				drawShapes={[ 17, 7 ]}
				customButtons={<></>}
			>

				<View style={styles.container}>

					<View style={styles.nameContainer}>
						<TextInput
							style={[ styles.textInput, styles.text ]}
							placeholder="first name"
							onChangeText={setFirstName}
							onEndEditing={validateInputs}
							value={firstName}
						/>
						{ hasErrors.firstName && <ErrorText text={errors.name} /> }
						<TextInput
							style={[ styles.textInput, styles.text ]}
							placeholder="last name"
							onChangeText={setLastName}
							onEndEditing={validateInputs}
							value={lastName}
						/>
						{ hasErrors.lastName && <ErrorText text={errors.name} /> }
					</View>

					<View style={styles.emailContainer}>
						<TextInput
							style={[ styles.textInput, styles.text ]}
							placeholder="email"
							onChangeText={setEmail}
							onEndEditing={validateInputs}
							value={email}
						/>
						{ hasErrors.email && <ErrorText text={errors.email} />}
					</View>

					<TextInput
						style={[ styles.textInput, styles.text ]}
						placeholder="password"
						onChangeText={setPassword}
						onEndEditing={validateInputs}
						value={password}
						secureTextEntry={true}
					/>
					{ hasErrors.password && <ErrorText text={errors.password} />}
					<TextInput
						style={[ styles.textInput, styles.text ]}
						placeholder="confirm password"
						onChangeText={setConfirmPassword}
						onEndEditing={validateInputs}
						value={confirmPassword}
						secureTextEntry={true}
					/>
					{ hasErrors.passwordMatch && <ErrorText text={errors.passwordMatch} />}

					<View style={styles.genderAndAgeContainer}>
						<View style={styles.dropdownContainer}>
							<View style={styles.textInput}>
								<RNPickerSelect
									placeholder={{ label: 'select one...', key: 'gender', inputLabel: 'gender'  }}
									items={genderChoices}
									onValueChange={handleSetGender}
									value={gender}
									style={{
										placeholder: styles.placeholderText,
										inputIOS: { ...styles.placeholderText, ...styles.text },
										inputAndroid: { ...styles.placeholderText, ...styles.text },
									}}
								/>
							</View>
							{ hasErrors.gender && <ErrorText text={errors.gender} />}
						</View>

						<View style={styles.dropdownContainer}>
							<View style={[ styles.textInput, styles.text ]}>
								<RNPickerSelect
									placeholder={{ label:'select one...', key: 'age', inputLabel: 'age group' }}
									items={ageGroupChoices}
									value={ageGroup}
									onValueChange={handleSetAgeGroup}
									style={{
										placeholder: styles.placeholderText,
										inputIOS: { ...styles.placeholderText, ...styles.text },
										inputAndroid: { ...styles.placeholderText, ...styles.text },
									}}
								/>
							</View>
							{ hasErrors.ageGroup && <ErrorText text={errors.ageGroup} />}
						</View>
					</View>

					{ showGenderTextInput && (
						<>
							<TextInput
								style={styles.textInput}
								placeholder="enter your gender"
								onChangeText={setCustomGender}
								onEndEditing={validateInputs}
								value={customGender}
							/>
							{ hasErrors.customGender && <ErrorText text={errors.name} />}
						</>
					)}

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
						<TouchableOpacity onPress={onSubmit} disabled={!isSubmitEnabled}>
							<View style={[
								styles.button,
								(!isSubmitEnabled || waitingForBackend) && styles.disabled,
							]}>
								{ waitingForBackend
									? <Spinner style={{ height: 28, width: 28 }} strokeColor={colors.White} />
									: <Text style={styles.buttonText}>Submit</Text>
								}
							</View>
						</TouchableOpacity>
					</View>

				</View>
			</OnboardingScreen>
		</KeyboardAvoidingView>
	);
};
