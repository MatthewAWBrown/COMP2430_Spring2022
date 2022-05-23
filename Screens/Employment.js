import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
} from 'react-native';

export default function Employment({ navigation }) {
  
  const pressHandler = () => {
    navigation.popToTop();
  }

  return(
    <SafeAreaView style={styles.header}>
    <ScrollView>
      <Text style={styles.textHeader}> Low Code Developer (co-op): </Text>
      <View style={styles.header2}>
        <Text syle={styles.paragraph}>
          RPDU, ETD, MGCS, Ontario Publis Service, Toronto, Ontario (remote) {"\n"}
          May - September, 2022:{"\n\n"}           
          Creating working prototypes of applications using low code. Work with clients to refine said prototypes. Create draft training and help materials.  Assist with presenting applications to management and develop strategies for adoption and refine applications for accessibility.  Capable of working independently and part of small teams.
        </Text>
      </View>
      <Text style={styles.textHeader}>
        Legal Secretary
      </Text>
      <View style = {styles.header2}>
        <Text style={styles.paragraph}>
          Law Offices of Whiteway Brown, Woodstock, New Brunswick {"\n"}
          May - August 2018 & April - August 2019{"\n\n"}
          Responsible for communication and scheduling consultations and appointments for clients, processing payments on accounts, formatting and filing appropriate documents, preparing draft documents.
        </Text>
      </View>
      <Text style={styles.textHeader}>
        Violin/Viola Instructor
      </Text>
      <View style = {styles.header2}>
        <Text style={styles.paragraph}>
          Contracted by Long & McQuade Lesson Centre, Fredericton, New Brunswick{"\n"}
          2012 - 2016 {"\n\n"}
          Responsible for creating age and skill appropriate curriculums, managing each lesson to the appropriate amount of time, and communicating with students (or parents/guardians of young students) regarding schedule changes or any other pertinent information.
        </Text>
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
});