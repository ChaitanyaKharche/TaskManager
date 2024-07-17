import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
=======
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { auth } from '../config/firebaseConfig';
import { initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> origin/main
import { getAnalytics, isSupported } from 'firebase/analytics';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [errors, setErrors] = useState({});
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
>>>>>>> origin/main

  useEffect(() => {
    isSupported().then((supported) => {
      if (supported) {
<<<<<<< HEAD
        const analytics = getAnalytics(auth.app);
=======
        const analytics = getAnalytics(app);
>>>>>>> origin/main
        console.log("Analytics initialized");
      } else {
        console.log("Analytics not supported");
      }
    });
  }, []);

<<<<<<< HEAD
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

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in');
        navigation.navigate('Tasks');
      } catch (error) {
        console.error("Login failed: ", error);
        setErrors({ general: error.message });
      }
    }
=======
  const handleLogin = async () => {
    setError(''); // Clear previous errors
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Invalid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in');
      navigation.navigate('Tasks');
    } catch (error) {
      console.error("Login failed: ", error);
      handleError(error);
    }
  };

  const handleError = (error) => {
    let errorMessage = 'An error occurred. Please try again.';
    if (error.code) {
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email address.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
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
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}
      
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
=======
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
=======
>>>>>>> origin/main
    padding: 10
  },
  errorText: {
    color: 'red',
<<<<<<< HEAD
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
    marginTop: 20,
>>>>>>> origin/main
    textAlign: 'center'
  }
});

<<<<<<< HEAD
export default LoginScreen;
=======
export default LoginScreen;
>>>>>>> origin/main
