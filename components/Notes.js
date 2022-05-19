import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import colors from '../misc/Colors';

const Note = ({item, onPress}) => {
  const {title, desc} = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text numberOfLines={2}> {title} </Text>
      <Text numberOfLines={3}> {desc} </Text>
    </TouchableOpacity>
  );
}

const width = Dimensions.get('window').width - 70;

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.SECONDARY,
    marginLeft: 15,
    marginRight: 15,
    width: width / 2 - 10, 
    borderRadius: 7,
  }
});

export default Note;