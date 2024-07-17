
# Task Manager App

This is a simple Task Manager application built with React Native and Firebase. The app allows users to sign up, log in, add tasks, mark them as completed, and view a leaderboard of task completions.

## Features

- **User Authentication**: Sign up, Log in, and Log out functionality using Firebase Authentication.
- **Task Management**: Create, Read, Update, and Delete (CRUD) operations for tasks using Firestore.
- **Task Status**: Mark tasks as completed or not completed.
- **Leaderboard**: View a leaderboard of users who have completed the most tasks.

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- React Native CLI (https://reactnative.dev/docs/environment-setup)
- Android Studio or Xcode (for iOS development)

### Firebase Setup

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on `Add Project` and follow the setup steps.
   - Register your app with Firebase:
     - Click on the `Web` icon (`</>`) to add a new web app.
     - Follow the instructions to register your app and obtain the Firebase configuration.

2. **Enable Authentication:**
   - In the Firebase Console, go to `Authentication` > `Sign-in method`.
   - Enable `Email/Password` sign-in method.

3. **Set Up Firestore:**
   - In the Firebase Console, go to `Firestore Database`.
   - Click on `Create database` and follow the setup steps.

### Local Development Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ChaitanyaKharche/TaskManagerApp.git
   cd TaskManagerApp
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a file named `firebaseConfig.js` in the `src/config` directory.
   - Add your Firebase configuration obtained from the Firebase Console:
     ```javascript
     import { initializeApp } from 'firebase/app';
     import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
     import { getFirestore } from 'firebase/firestore';
     import AsyncStorage from '@react-native-async-storage/async-storage';
     import { getAnalytics, isSupported } from 'firebase/analytics';

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
     };

     const app = initializeApp(firebaseConfig);

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
     ```

4. **Run the Application:**
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

## Additional Enhancements

### Form Validation

- **SignupScreen.js** and **LoginScreen.js**: Added robust validation for email and password fields to ensure valid inputs and enhance user experience.

### Push Notifications

- **NotificationService.js**: Implemented a service to handle push notifications using Firebase Cloud Messaging.
- Added functionality to request user permission, retrieve FCM token, and handle incoming notifications.

### Improved UI/UX

- **AppStyles.js**: Created a central file for common styles to maintain consistency across the app.
- Enhanced button and input field styling for a better user experience.

## License

This project is licensed under the MIT License.

---
Feel free to reach out if you have any questions or need further assistance.

**Contact Information:**
- Email: [kchaitanya1331@gmail.com](mailto:kchaitanya1331@gmail.com)
- GitHub: [https://github.com/ChaitanyaKharche](https://github.com/ChaitanyaKharche)

