import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from '../misc/Colors';

export default function MountAllison({ navigation }) {
  
  const pressHandler = () => {
    navigation.popToTop();
  }

  const MTA = () => {
    Linking.openURL('https://mta.ca/academics/programs-and-degrees/music');
  }

  return(
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress = {MTA}>
      <Text style={styles.textHeader}> Bachelor of Music (cello performance): </Text>
      </TouchableOpacity>
      <View style={styles.header2}>
        <Text syle={styles.paragraph}>
          Graduated 2020: {"\n\n"}         
          In 2016 I was accepted to the music program at Mount Allison University (Sackville, New Brunswick) after successfully auditioning on cello. During my music degree I choose to focus on music history and composition as well as performing with the Mount Allison University Chamber Orchestra and Mount Allison University String Quartet. 
        </Text>
      </View>
      <Image style ={styles.image} source={require('../assets/alteredquestions.jpg')}/>
      <Button title = 'Go Home' onPress={pressHandler} />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 20,
  },
  header2: {
    padding: 20,
  },
  textHeader:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: colors.SECONDARY,
  },
  paragraph: {
    marginBottom: 30,
  },
    image: {
    marginBottom: 15,
    padding: 15,
    height: 125,
    width: 125,
    borderRadius: 40,
    alignSelf: 'center',
    }
});