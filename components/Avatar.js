import React, { useCallback } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  Linking, 
  Alert,
} from 'react-native';

export default function Avatar() {

  const pressHandler = () => {
    Linking.openURL('https://github.com/MatthewAWBrown');
  }

  return (
    <TouchableOpacity onPress = {pressHandler}>
      <Image style={styles.avatar} source={require('../assets/250_blu.png')} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    avatar: {
    height: 128,
    width: 128,
    borderRadius: 50,
    alignSelf: 'center',
  },
});