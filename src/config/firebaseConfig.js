import { initializeApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBVcdDVJCuApurkRH1pnrjPXMLBR16fEsY",
  authDomain: "taskmanager-6dbb4.firebaseapp.com",
  projectId: "taskmanager-6dbb4",
  storageBucket: "taskmanager-6dbb4.appspot.com",
  messagingSenderId: "306624752108",
  appId: "1:306624752108:web:4f8a361adcfb17218d78c9",
  measurementId: "G-R428Y73BB0"
};

let app;
if (!initializeApp.apps.length) {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp.app();
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, messaging };