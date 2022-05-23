import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import colors from '../misc/Colors';

export default function Hobbies({}) {
  
  const pressHandler = () => {
    navigation.popToTop();
  }

  return(
    <SafeAreaView style={styles.header}>
    <ScrollView>
      <Text style={styles.textHeader}> Dungeons & Dragons </Text>
      <View style={styles.header2}>
        <Image style ={styles.image} source={require('../assets/DnD.jpg')} />
        <Text syle={styles.paragraph}>
          In the Fall of 2020 I started DMing a weekly game of Dungeons & Dragons. The game is still running and now on its second campaign. I was also able to start two other weekly games as a DM and two games as a player, one of the games that I play in uses the older 3.5 system.
        </Text>
      </View>
      <Text style={styles.textHeader}>
        Final Fantasy XIV
      </Text>
      <View style = {styles.header2}>
        <Text style={styles.paragraph}>
          After being required to play Final Fantasy XIV as part of an assignment for a class I took through Athabasca University I found that I so throughly enjoyed the game that I continued playing it and joined a group to complete harder game content.  My favourite class to play is Red Mage.
        </Text>
        <Image style={styles.image2} source={require('../assets/rdmThia.jpg')}/>
      </View>
      <Text style={styles.textHeader}>
        FoundryVTT & Roll20
      </Text>
      <View style = {styles.header2}>
        <Text style={styles.paragraph}>
          Roll20 and Foundry VTT are both virtual table top programs that help facilitate running tabletop roll playing games (like Dungeons & Dragons) and playing with Roll20's APIs is what first ignited my passion for coding and software design. Now I mainly use Foundry for its self-hosting options and I'm working on a pet project to create a module for Foundry to help with Dungeons and Dragons 5e (but first I need to find the time to refine and polish my javascript skills).
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );

}

const width = Dimensions.get("screen");

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
    color: colors.PRIMARY,
  },
  paragraph: {
    marginBottom: 30,
  },
  image: {
    height: 100,
    width: width,
  },
  image2: {
    flexDirection: 'row',
    height: 277.5,
    width: 277.5,
    alignSelf: 'flex-end',
  },
});