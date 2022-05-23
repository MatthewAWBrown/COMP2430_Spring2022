import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Navigator from './Routes/HomeStack'

export default function App() {
  return (
    <Navigator />
  );
}