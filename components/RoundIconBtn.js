import React from 'react';
import {View,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/Colors.js';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return <AntDesign 
    name={antIconName} 
    size={size || 40} 
    color={color || colors.LIGHT}
    style={[styles.icon, {...style}]}
    onPress={onPress} 
  />
};

const styles = StyleSheet.create({
  icon:{
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 35,
    overflow: 'hidden',
    shadowRadius: 5,
    shadowOffset: {width: -5, height: 2},
  }
});

export default RoundIconBtn;