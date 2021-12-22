/* eslint-disable object-shorthand */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Spinner } from 'react-native-material-kit';
import RNPickerSelect from 'react-native-picker-select';
import RNLocalize from 'react-native-localize';

import { OnboardingScreens, RootStacks } from 'route/enums';
import { OnboardingScreen } from '@elements';
import colors from '@elements/globalStyles/color';
import { DEMO_MODE } from '@util/demoMode';
import { getUniqueDeviceId } from '@util/deviceInfo';
import { openWebLink } from '@util/linking';
import { addAuthHeader, loveDb } from '@util/loveDb';
import { isEmail, isPasswordAllowed } from '@util/validation';
import { useDispatch } from 'react-redux';
import { setLoggedInUser, syncSurveys } from '@redux/action';
import {
	ageGroupChoices,
	errors,
	genderChoices,
} from './constants';
import styles from './SignupForm.styles';

enum SignupError {
	AlreadyExists = 'That email address already has an account. Please log in or use a different one',
	Default = 'Sorry, there was a problem signing up for an account. Please try again later',
	Network = "Couldn't reach the server - please make sure you have a good network connection and try again",
	None = '',
}

const ErrorText = ({ text }) => (
	<View style={styles.errorContainer}>
		<Text style={styles.errorText}>{text}</Text>
	</View>
);

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const timeZone = RNLocalize.getTimeZone();
	const genderDropdownRef = useRef<RNPickerSelect>(null);
	const ageDropdownRef = useRef<RNPickerSelect>(null);

	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ gender, setGender ] = useState('');
	const [ showGenderTextInput, setShowGenderTextInput ] = useState(false);
	const [ customGender, setCustomGender ] = useState('');
	const [ ageGroup, setAgeGroup ] = useState('');
	const [ deviceId, setDeviceId ] = useState('');
	const [ waitingForBackend, setWaitingForBackend ] = useState(false);
	const [ signupError, setSignupError ] = useState(SignupError.None);

	const [ hasErrors, setHasErrors ] = useState({
		firstName: false,
		lastName: false,
		email: false,
		password: false,
		passwordMatch: false,
		gender: false,
		ageGroup: false,
		customGender: false,
		timeZone: false,
	});

	const isSubmitEnabled = DEMO_MODE
		|| (isPasswordAllowed(password)
		&& password === confirmPassword
		&& firstName.length
		&& lastName.length
		&& isEmail(email)
		&& Object.values(hasErrors).every(error => !error));

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
			tempErrors.timeZone = !timeZone;
			setHasErrors(tempErrors);
		}, 250);
	};

	const handleSetGender = (value: string) => {
		setGender(value);
		// genderDropdownRef.current?.togglePicker(true);

		if (value === 'other') {
			setShowGenderTextInput(true);
			return;
		}

		validateInputs();
		setCustomGender('');
		setShowGenderTextInput(false);
	};

	const handleSetAgeGroup = (value: string) => {
		// ageDropdownRef.current?.togglePicker(true);
		setAgeGroup(value);
		validateInputs();
	};

	const onSubmit = () => {
		const payload = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			password: password,
			gender: customGender || gender,
			age_group_start: ageGroup,
			time_zone: timeZone,
			device_id: deviceId,
		};

		setSignupError(SignupError.None);
		setWaitingForBackend(true);

		loveDb.post('/signup', payload)
			.then(({ data: { user, accessToken } }) => {
				setWaitingForBackend(false);
				dispatch(setLoggedInUser(accessToken, user));
				addAuthHeader(accessToken);
				navigate(OnboardingScreens.ThankYouForSigningUp);
				dispatch(syncSurveys());
			})
			.catch((error) => {
				setWaitingForBackend(false);

				switch (error.message) {
					case 'Network Error':
						setSignupError(SignupError.Network);
						break;
					case 'Request failed with status code 400':
						setSignupError(SignupError.AlreadyExists);
						break;
					default:
						setSignupError(SignupError.Default);
				}
			});
	};

	useEffect(() => {
		getUniqueDeviceId()
			.then(setDeviceId)
			.catch(console.error);
	}, [ setDeviceId ]);

	return (
		<OnboardingScreen
			title="Sign Up"
			titleContainerStyle={styles.titlePadding}
			drawShapes={[ 17, 7 ]}
			customButtons={<></>}
		>
			<View style={styles.container}>
				<View>
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
							autoCapitalize="none"
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
						secureTextEntry
					/>

					{ hasErrors.password && <ErrorText text={errors.password} />}

					<TextInput
						style={[ styles.textInput, styles.text ]}
						placeholder="confirm password"
						onChangeText={setConfirmPassword}
						onEndEditing={validateInputs}
						value={confirmPassword}
						secureTextEntry
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
									ref={genderDropdownRef}
								/>
							</View>

							{ hasErrors.gender && <ErrorText text={errors.gender} />}
						</View>

						<View style={styles.dropdownContainer}>
							<View style={[ styles.textInput, styles.text ]}>
								<RNPickerSelect
									placeholder={{ label: 'select one...', key: 'age', inputLabel: 'age group' }}
									items={ageGroupChoices}
									value={ageGroup}
									onValueChange={handleSetAgeGroup}
									style={{
										placeholder: styles.placeholderText,
										inputIOS: { ...styles.placeholderText, ...styles.text },
										inputAndroid: { ...styles.placeholderText, ...styles.text },
									}}
									ref={ageDropdownRef}
								/>
							</View>

							{ hasErrors.ageGroup && <ErrorText text={errors.ageGroup} />}
						</View>
					</View>

					{ showGenderTextInput
						? (
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
						)
						: null
					}
				</View>

				<View>
					<View style={styles.termsContainer}>
						<Text style={styles.termsText}>By submitting, you agree to our</Text>

						<View style={styles.linksContainer}>
							<TouchableOpacity onPress={() => openWebLink('https://www.love-decoded.com/terms-of-service')}>
								<Text style={[ styles.termsText, styles.termsLink ]}>
									Terms and Privacy Policy
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={styles.errorContainer}>
					<Text style={[ styles.errorText, styles.bottomErrorText ]}>{signupError}</Text>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={onSubmit} disabled={!isSubmitEnabled}>
						<View style={[
							styles.button,
							(!isSubmitEnabled || waitingForBackend) && styles.disabled,
						]}>
							{ waitingForBackend
								? <Spinner style={styles.spinner} strokeColor={colors.White} />
								: <Text style={styles.buttonText}>Submit</Text>
							}
						</View>
					</TouchableOpacity>

					{ signupError === SignupError.AlreadyExists && (
						<TouchableOpacity
							onPress={() => { navigate(RootStacks.Login); }}
							disabled={!isSubmitEnabled}
						>
							<Text style={[ styles.termsText, styles.loginText ]}>Log In</Text>
						</TouchableOpacity>
					)}
				</View>

			</View>
		</OnboardingScreen>
	);
};
