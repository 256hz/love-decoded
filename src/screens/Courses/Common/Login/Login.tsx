import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Spinner } from 'react-native-material-kit';
import { OnboardingScreen } from '@elements';
import BackButtonHeader from '@elements/Headers/BackButtonHeader';
import colors from '@elements/globalStyles/color';
import { errors } from 'screens/Onboarding/SignupForm/constants';
import { loveDb } from 'util/loveDb';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from 'redux/action';
import { isEmail, isPasswordAllowed } from 'util/validation';
import { RootStacks } from 'route/enums';
import styles from './Login.styles';

enum LoginError {
	Auth = "Email or password doesn't match, please try again",
	Default = 'Sorry, there was a problem logging you in.  Please try again later',
	Network = "Couldn't reach the server - please make sure you have a good network connection and try again",
	None = '',
}

const getLoginError = (status: number): LoginError => {
	switch (status) {
		case 401:
			return LoginError.Auth;
		case 404:
		case 408:
		case 504:
			return LoginError.Network;
		case 500:
		default:
			return LoginError.Default;
	}
};

const ErrorText = ({ text }) => (
	<View style={styles.errorContainer}>
		<Text style={styles.errorText}>{text}</Text>
	</View>
);

export default () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loginError, setLoginError ] = useState(LoginError.None);
	const [ waitingForBackend, setWaitingForBackend ] = useState(false);

	const [ hasErrors, setHasErrors ] = useState({
		email: false,
		password: false,
	});

	const validateInputs = () => {
		setTimeout(() => {
			setHasErrors({
				email: !!email.length && !isEmail(email),
				password: !!password.length && !isPasswordAllowed(password),
			});
		}, 250);
	};

	const loginDisabled = !email
		|| !password
		|| Object.values(hasErrors).some(error => !!error);

	const login = () => {
		setWaitingForBackend(true);
		setLoginError(LoginError.None);

		loveDb.post('/signin', { email, password })
			.then(res => {
				const { data: { accessToken, user } } = res;

				dispatch(setLoggedInUser(accessToken, user));

				navigation.navigate(RootStacks.HomeTabs);
			})
			.catch(res => {
				const { status, data } = res;
				console.error(data.message);

				dispatch(setLoggedInUser('', {}));
				setLoginError(getLoginError(status));
			})
			.finally(() => {
				setWaitingForBackend(false);
			});
	};

	return (
		<OnboardingScreen
			customButtons={<></>}
			drawShapes={[ 1, 11, 19 ]}
			scrollDisabled
		>
			<View style={styles.outerContainer}>
				<View style={styles.container}>
					<View style={styles.backButtonContainer}>
						<BackButtonHeader navigation={navigation} destination="" />
					</View>

					<View style={styles.headingContainer}>
						<Text style={styles.headingText}>
							Already have an account? Log in below.
						</Text>
					</View>

					<View style={styles.inputsContainer}>
						<TextInput
							autoCapitalize="none"
							onChangeText={text => { setEmail(text); validateInputs(); }}
							placeholder="email"
							style={styles.input}
							value={email}
						/>

						{ hasErrors.email && <ErrorText text={errors.email} />}

						<TextInput
							onChangeText={text => { setPassword(text); validateInputs(); }}
							onEndEditing={validateInputs}
							placeholder="password"
							secureTextEntry
							style={styles.input}
							value={password}
						/>

						{ hasErrors.password && <ErrorText text={errors.password} />}
					</View>

					<View>
						<TouchableOpacity onPress={login} disabled={loginDisabled}>
							<View style={styles.buttonContainer}>
								<View style={[ styles.button, loginDisabled && styles.disabled ]}>
									{
										waitingForBackend
											? <Spinner style={styles.spinner} strokeColor={colors.White} />
											: <Text style={styles.buttonText}>Login</Text>
									}
								</View>
							</View>
						</TouchableOpacity>

						<Text style={styles.forgotPasswordLinkText}>
							Forgot password?
						</Text>
					</View>

					<View style={styles.loginErrorContainer}>
						{
							loginError !== LoginError.None
								? <Text style={styles.loginErrorText}>{loginError}</Text>
								: <Text style={styles.noLoginErrorText}>{LoginError.Default}</Text>
						}
					</View>
				</View>
			</View>
		</OnboardingScreen>
	);
};
