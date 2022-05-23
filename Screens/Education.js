import React from 'react';
import {
  View, 
  StyleSheet, 
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function Education({ navigation }) {

  const pressHandlerLU = () => {
    navigation.navigate('Lakehead');
  }
  const pressHandlerAU = () => {
    navigation.navigate('Athabasca');
  }
  const pressHandlerMTA = () => {
    navigation.navigate('MountAllison');
  }

  return(
    <SafeAreaView style = {styles.schoolBtn}>
    <ScrollView>
      <Text style = {styles.header}>
        Schools attended: 
      </Text>
      <Text style = {styles.title}> Lakehead University </Text>
      <TouchableOpacity onPress={pressHandlerLU}>
        <Image style={styles.image} source={require('../assets/lakehead-01.png')}/>
      </TouchableOpacity>
      <Text style = {styles.title}> Athabasca University </Text>
      <TouchableOpacity onPress = {pressHandlerAU}>
        <Image style={styles.image} source={require('../assets/AthabascaU.png')}/>
      </TouchableOpacity>
      <Text style = {styles.title}> Mount Allions University </Text>
      <TouchableOpacity onPress = {pressHandlerMTA}>
        <Image style={styles.image} source={require('../assets/MOUNT-ALLISON.jpg')}/>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  schoolBtn: {
    flex: 1,
    padding: 15,
    alignContent: 'center',
  },
  image: {
    marginBottom: 15,
    padding: 15,
    height: 125,
    width: 125,
    borderRadius: 40,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});