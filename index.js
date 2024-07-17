import { AppRegistry } from 'react-native';
import App from './src/App.js'; // Use App.js or App.tsx
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
