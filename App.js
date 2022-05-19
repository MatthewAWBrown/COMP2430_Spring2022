import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NoteScreen from './screens/NoteScreen.js';
import Navigator from './routes/HomeStack';


export default function App() {
  
  /*useEffect(() => {
    AsyncStorage.clear()
  }, []);*/

  return (<Navigator />);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});