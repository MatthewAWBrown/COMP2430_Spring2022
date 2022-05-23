import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from '../misc/Colors';

export default function Lakehead({ navigation }) {
  
  const pressHandler = () => {
    navigation.popToTop();
  }
  const LakeheadU = () => {
    Linking.openURL('https://www.lakeheadu.ca/programs/undergraduate-programs/computer-science');
  }
  const LakeheadMusic = () => {
    Linking.openURL('https://www.lakeheadu.ca/programs/undergraduate-programs/music/node/3352');
  }

  return(
    <SafeAreaView style={styles.header}>
    <ScrollView>
      <TouchableOpacity onPress={LakeheadU}>
      <Text style={styles.textHeader}> Bachelor of Science with Honours in Computer Science (co-op): </Text>
      </TouchableOpacity>
      <View style={styles.header2}>
        <Text syle={styles.paragraph}>
          Prospective 2025 Graduate: {"\n"}
          Current and completed Computer Science courses:{"\n\n"}           
          COMP-1411: Computer Programming I (C){"\n"}
          COMP-1431: Computer Programming II (C++){"\n"}
          COMP-2430: Mobile Computing Technology (Flutter & React Native){"\n"}
          COMP-2476: Intro Assembly Lang. & Op. Sys. (.masm assembly){"\n"}
        </Text>
      </View>
      <TouchableOpacity onPress = {LakeheadMusic}>
      <Text style={styles.textHeader}>
        Visiting Student 2019-2020: Bachelor of Music
      </Text>
      </TouchableOpacity>
      <View style = {styles.header2}>
        <Text style={styles.paragraph}>
          While completing my BMus from MTA I finished my final year at Lakehead University with special permission from both Lakehead and Mount Allison University. While studying at Lakehead University I had the opportunity to join a student String Quartet and perform for the Governor General.
        </Text>
      </View>
      <Button title = 'Go Home' onPress={pressHandler} />
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
    color: colors.SECONDARY,
  },
  paragraph: {
    marginBottom: 30,
  },
});