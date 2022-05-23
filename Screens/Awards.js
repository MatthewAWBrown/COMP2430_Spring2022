import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  ScrollView,
} from 'react-native';

export default function Awards({ navigation }) {
  
  const pressHandler = () => {
    navigation.popToTop();
  }

  return(
    <SafeAreaView style={styles.header}>
    <ScrollView>
      <Text style={styles.textHeader}> Appian Developer: </Text>
      <View style={styles.header2}>
        <Text syle={styles.paragraph}>
          May 17, 2022: {"\n\n"}         
          Certified as an Appian Developer after completing the 80 hour Appian course.
        </Text>
        <Image style={styles.image} source={require('../assets/Appian.jpg')}/>
      </View>
      <Text style={styles.textHeader}>
        Commissioner of Oaths (New Brunswick)
      </Text>
      <View style = {styles.header2}>
        <Text style={styles.paragraph}>
          Expires 2023
        </Text>
        <Image style={styles.image} source={require('../assets/commissioner-of-oath-stamp-group.jpg')} />
      </View>
      </ScrollView>
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
  },
  paragraph: {
    marginBottom: 30,
  },
   image: {
    marginBottom: 15,
    padding: 15,
    height: 125,
    width: 125,
    alignSelf: 'center',
    }
});