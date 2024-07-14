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
   git clone https://github.com/YOUR_USERNAME/TaskManagerApp.git
   cd TaskManagerApp
