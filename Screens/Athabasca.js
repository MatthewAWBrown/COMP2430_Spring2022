import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from '../misc/Colors';

export default function Athabasca({ navigation }) {
  
  const pressHandler = () => {
    navigation.popToTop();
  }
  const AthabascaU = () => {
    Linking.openURL('https://www.athabascau.ca/programs/summary/bachelor-of-science-in-computing-and-information-systems.html')
  }

  return(
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress = {AthabascaU}>
      <Text style={styles.textHeader}> Bachelor of Science - Computing and Information Systems: </Text>
      </TouchableOpacity>
      <View style={styles.header2}>
        <Text syle={styles.paragraph}>
          Credits transferred: {"\n"}
          Completed Computer Science courses:{"\n\n"}           
          COMP 200: Intro to Computer Systems (html) {"\n"}
          COMP 210: Intro to Info Sys & Comp App (Python) {"\n"}
          COMP 214: Interactive Technologies (Final Fantasy XIV & Google Earth) {"\n"}
        </Text>
      </View>
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
});