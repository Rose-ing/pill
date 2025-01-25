import 'react-native-gesture-handler';
import React from 'react';
import { Platform, UIManager } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  return <AppNavigator />;
} 