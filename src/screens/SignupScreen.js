import React, { useState } from 'react';
<<<<<<< HEAD
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
=======
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
>>>>>>> origin/main
import { auth, db } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.toLowerCase(), password);
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          createdAt: new Date().toISOString(),
        });

        navigation.navigate('Login');
      } catch (error) {
        console.error("Signup failed: ", error.message);
        setErrors({ general: error.message });
      }
    }
=======
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignup = async () => {
    setError(''); // Clear previous errors
    setEmailError('');
    setPasswordError('');
    const lowerCaseEmail = email.toLowerCase(); // Convert email to lowercase

    if (!validateEmail(email)) {
      setEmailError('Invalid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, lowerCaseEmail, password);
      const user = userCredential.user;

      // Save user details to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        // Add any additional user fields here
      });

      navigation.navigate('Login');
    } catch (error) {
      console.error("Signup failed: ", error.message);
      handleError(error);
    }
  };

  const handleError = (error) => {
    let errorMessage = 'An error occurred. Please try again.';
    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email address is already in use.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'This email address is invalid.';
          break;
        case 'auth/weak-password':
          errorMessage = 'The password is too weak.';
          break;
        default:
          errorMessage = error.message;
          break;
      }
    }
    setError(errorMessage);
>>>>>>> origin/main
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
<<<<<<< HEAD
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

=======
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
>>>>>>> origin/main
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
<<<<<<< HEAD
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
=======
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <Button title="Sign Up" onPress={handleSignup} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Log in
      </Text>
>>>>>>> origin/main
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
<<<<<<< HEAD
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  linkText: {
    marginTop: 20,
    color: '#007AFF',
=======
    padding: 10
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center'
  },
  errorText: {
    color: 'red',
    marginTop: 20,
>>>>>>> origin/main
    textAlign: 'center'
  }
});

<<<<<<< HEAD
export default SignupScreen;
=======
export default SignupScreen;
>>>>>>> origin/main
