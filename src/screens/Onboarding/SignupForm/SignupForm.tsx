import { OnboardingScreen } from 'elements';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './SignupForm.styles';

export default () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const isEmail = address => {
		const splitAt = address.split('@');

		return splitAt.length === 2 && splitAt[1].split('.').length === 2;
	};

	const isPasswordAllowed = password.length > 6 && password.match(/[\w\d_. !@#$%^&*()-]+/g);

	const isSubmitEnabled = isPasswordAllowed
		&& password === confirmPassword
		&& firstName.length > 1
		&& lastName.length > 1
		&& isEmail(email);

	const onSubmit = () => {
		console.log('submit:', { firstName, lastName, email, password, confirmPassword });
	};

	return (
		<OnboardingScreen
			title="Sign Up"
			titleContainerStyle={{ paddingTop: 42 }}
			drawShapes={[ 17, 7 ]}
			customButtons={<></>}
		>

			<View style={styles.container}>

				<View style={styles.nameContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="first name"
						onChangeText={setFirstName}
						value={firstName}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="last name"
						onChangeText={setLastName}
						value={lastName}
					/>
				</View>

				<View style={styles.emailContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="email"
						onChangeText={setEmail}
						value={email}
					/>
				</View>

				<TextInput
					style={styles.textInput}
					placeholder="password"
					onChangeText={setPassword}
					value={password}
					secureTextEntry={true}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="confirm password"
					onChangeText={setConfirmPassword}
					value={confirmPassword}
					secureTextEntry={true}
				/>

				<View style={styles.genderAndAgeContainer}>
					<View style={[ styles.textInput, styles.dropdown ]}>
						<View />
					</View>
					<View style={[ styles.textInput, styles.dropdown ]}>
						<View />
					</View>
				</View>

				<View style={styles.termsContainer}>
					<Text style={styles.termsText}>By tapping, you agree to our</Text>
					<View style={styles.bottomLineContainer} />
					<Text style={styles.termsText}>
						<TouchableOpacity onPress={() => console.log('terms')}>
							<Text style={[ styles.termsText, styles.termsLink ]}>
								Terms
							</Text>
						</TouchableOpacity>
						{' and '}
						<TouchableOpacity onPress={() => console.log('privacy')}>
							<Text style={[ styles.termsText, styles.termsLink ]}>
								Privacy Policy
							</Text>
						</TouchableOpacity>
					</Text>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={onSubmit} disabled={!isSubmitEnabled}>
						<View style={[ styles.button, !isSubmitEnabled && styles.disabled ]}>
							<Text style={styles.buttonText}>
								Submit
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</OnboardingScreen>
	);
};
