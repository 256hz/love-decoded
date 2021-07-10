import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { OnboardingScreen } from '@elements';
import styles from './Login.styles';

enum LoginErrors {
	None = '',
	Network = "Couldn't reach the server - please make sure you have a good network connection and try again",
	Auth = "Email or password doesn't match, please try again",
}

export default () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loginError, setLoginError ] = useState(LoginErrors.None);

	return (
		<OnboardingScreen
			customButtons={<></>}
			drawShapes={[ 26, 27 ]}
			hideBackgroundImage
		>
			<View style={styles.container}>
				<View style={styles.inputLabelContainer}>
					<Text style={styles.inputLabel}>Email</Text>
				</View>

				<TextInput
					onChangeText={setEmail}
					value={email}
					style={styles.input}
				/>

				<View style={styles.inputLabelContainer}>
					<Text style={styles.inputLabel}>Password</Text>
				</View>

				<TextInput
					onChangeText={setPassword}
					value={password}
					style={styles.input}
				/>

				{
					loginError !== LoginErrors.None
						? (
							<View style={styles.loginErrorContainer}>
								<Text style={styles.loginErrorText}>{loginError}</Text>
							</View>
						)
						: null
				}

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>
							Login
						</Text>
					</View>
				</View>
			</View>
		</OnboardingScreen>
	);
};
