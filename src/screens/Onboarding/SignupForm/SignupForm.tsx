import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Spinner } from 'react-native-material-kit';
import RNPickerSelect from 'react-native-picker-select';
import { OnboardingScreen, StackKeyboardAvoidingView } from '@elements';
import colors from '@elements/globalStyles/color';
import { OnboardingScreens } from 'route/enums';
import { DEMO_MODE } from '@App';
import {
	ageGroupChoices,
	errors,
	genderChoices,
	MINUMUM_PASSWORD_LENGTH,
} from './constants';
import styles from './SignupForm.styles';

const ErrorText = ({ text }) => (
	<View style={styles.errorContainer}>
		<Text style={styles.errorText}>{text}</Text>
	</View>
);

export default () => {
	const { navigate } = useNavigation();
	const [ keyboardVisible, setKeyboardVisible ] = useState(false);

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
		return passwordToCheck.length >= MINUMUM_PASSWORD_LENGTH
			&& password.match(/[\w\d_. !@#$%^&*()-]+/g);
	}, [ password ]);

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

			setHasErrors(tempErrors);
		}, 750);
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
			navigate(OnboardingScreens.ThankYouForSigningUp);
		}, 1500);
	};

	return (
		<StackKeyboardAvoidingView
			setKeyboardVisible={setKeyboardVisible}
			style={keyboardVisible ? styles.keyboardPadding : undefined}
		>
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
		</StackKeyboardAvoidingView>
	);
};
