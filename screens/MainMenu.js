import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Button,
 } from 'react-native';
 import Colors from '../misc/Colors';

export default function MainMenu({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
       <Button 
          title='Your Notes'
          onPress={() => navigation.push('Your Notes')}
        />
        <View style = {styles.space}/>
        <Button 
          title='Home Notes' 
          onPress={() => navigation.push('Home Notes')}
        />
        <View style = {styles.space}/>
        <Button 
          title='Love Notes'
          onPress={() => navigation.push('Love Notes')} 
        />
        <View style = {styles.space}/>
        <Button 
          title = 'Family Notes'
         onPress={() => navigation.push('Family Notes')} 
        />
        <View style = {styles.space}/>
        <Button 
          title = 'Friend Notes'
          onPress = {() => navigation.push('Friend Notes')} 
        />
        <View style = {styles.space}/>
        <Button 
          title = 'School Notes'
          onPress = {() => navigation.push('School Notes')} 
        />
        <View style = {styles.space}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignContent: "center",
    padding: 15,
  },
  space:{
    padding: 15,
  },
});