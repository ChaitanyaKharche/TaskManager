import messaging from '@react-native-firebase/messaging';
import { app } from './firebaseConfig';
import { Alert } from 'react-native';

let fcmToken = null;

class NotificationService {
  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      this.getFCMToken();
    }
  }

  async getFCMToken() {
    if (!fcmToken) {
      try {
        fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log('FCM Token:', fcmToken);
          // TODO: Send this token to your server
        }
      } catch (error) {
        console.log('Failed to get FCM token:', error);
      }
    }
    return fcmToken;
  }

  registerHandler() {
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      Alert.alert('New Message', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().onTokenRefresh(token => {
      console.log('FCM token refreshed:', token);
      fcmToken = token;
      // TODO: Send this new token to your server
    });
  }

  async init() {
    await app.initialize();
    await this.requestUserPermission();
    this.registerHandler();
  }
}

export default new NotificationService();