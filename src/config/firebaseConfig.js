import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBVcdDVJCuApurkRH1pnrjPXMLBR16fEsY",
  authDomain: "taskmanager-6dbb4.firebaseapp.com",
  projectId: "taskmanager-6dbb4",
  storageBucket: "taskmanager-6dbb4.appspot.com",
  messagingSenderId: "306624752108",
  appId: "1:306624752108:web:4f8a361adcfb17218d78c9",
  measurementId: "G-R428Y73BB0"
};

const app = initializeApp(firebaseConfig);

// Conditionally initialize Firebase Analytics
isSupported().then(supported => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized.");
  } else {
    console.log("Firebase Analytics not supported in this environment.");
  }
});

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);

export { app, auth, db };
