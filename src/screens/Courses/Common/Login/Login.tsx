import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { OnboardingScreen } from '@elements';
import { useNavigation } from '@react-navigation/native';
import BackButtonHeader from 'elements/Headers/BackButtonHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Login.styles';

enum LoginErrors {
	None = '',
	Network = "Couldn't reach the server - please make sure you have a good network connection and try again",
	Auth = "Email or password doesn't match, please try again",
}

const defaultErrorMessage = 'There was a problem logging you in.  Please make sure you have a good connection and try again later.';

export default () => {
	const navigation = useNavigation();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loginError, setLoginError ] = useState(LoginErrors.None);

	const login = () => {
		const { token, status, error } = {} as any; // log in

		if (status !== 200) {
			setLoginError(error);
		}
	};

	return (
		<OnboardingScreen
			customButtons={<></>}
			drawShapes={[ 1, 11, 19 ]}
		>
			<View style={styles.container}>
				<View style={styles.backButtonContainer}>
					<BackButtonHeader navigation={navigation} destination="" />
				</View>

				<View style={styles.headingContainer}>
					<Text style={styles.headingText}>
						Already have an account?  Log in below.
					</Text>
				</View>

				<View style={styles.inputsContainer}>
					<View>
						<View style={styles.inputLabelContainer}>
							<Text style={styles.inputLabel}>Email</Text>
						</View>

						<TextInput
							onChangeText={setEmail}
							value={email}
							style={styles.input}
							autoCapitalize="none"
						/>
					</View>

					<View>
						<View style={styles.inputLabelContainer}>
							<Text style={styles.inputLabel}>Password</Text>
						</View>

						<TextInput
							onChangeText={setPassword}
							secureTextEntry
							style={styles.input}
							value={password}
						/>

						<Text style={styles.forgotPasswordLinkText}>
							Forgot password?
						</Text>
					</View>
				</View>

				<TouchableOpacity onPress={login}>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								Login
							</Text>
						</View>
					</View>
				</TouchableOpacity>

				{
					loginError !== LoginErrors.None
						? (
							<View style={styles.loginErrorContainer}>
								<Text style={styles.loginErrorText}>{loginError || defaultErrorMessage}</Text>
							</View>
						)
						: (
							<View style={styles.loginErrorContainer}>
								<Text style={styles.noLoginErrorText}>{loginError || defaultErrorMessage}</Text>
							</View>
						)
				}
			</View>
		</OnboardingScreen>
	);
};
