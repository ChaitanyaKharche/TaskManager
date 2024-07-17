<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { app } from './config/firebaseConfig';
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
>>>>>>> origin/main
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TaskScreen from './screens/TaskScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
<<<<<<< HEAD
import NotificationService from './config/NotificationService';
=======
>>>>>>> origin/main

const Stack = createNativeStackNavigator();

const App = () => {
<<<<<<< HEAD
  const [isFirebaseInitialized, setIsFirebaseInitialized] = useState(false);

  useEffect(() => {
    const initializeFirebaseAndNotifications = async () => {
      try {
        await app.initialize();
        await NotificationService.init();
        setIsFirebaseInitialized(true);
      } catch (error) {
        console.error('Failed to initialize Firebase:', error);
      }
    };

    initializeFirebaseAndNotifications();
  }, []);

  if (!isFirebaseInitialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Initializing app...</Text>
      </View>
    );
  }

=======
>>>>>>> origin/main
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/main
