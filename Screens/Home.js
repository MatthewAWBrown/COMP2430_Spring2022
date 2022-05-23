import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  SafeAreaView,
  Button,
  ScrollView, 
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Avatar from '../components/Avatar';
import colors from '../misc/Colors';

export default function Home({ navigation }) {
  
  const EducationNavigation = () => {
    navigation.navigate('Education');
  }
  const Employment = () => {
    navigation.navigate('Employment');
  }
  const AwardsNavigation = () => {
    navigation.navigate('Awards');
  }
  const Hobbies = () => {
    navigation.navigate('Hobbies');
  }

  return (
    <SafeAreaView style = {styles.safeAreaView}>
    <ScrollView>
      <Text style={styles.header}> Matthew Brown </Text>
      <View style={styles.container}>
        <Avatar />
        <Text style={styles.paragraph}>
          Professional musician, Dungeon Master dilettante, part-time wizard, aspiring code monkey, and coffee enthusiast.
        </Text>
        <Button title = 'Education' style={styles.container} onPress={EducationNavigation} />
        <Button title = 'Employment History' style={styles.container} onPress={Employment}/>
        <Button title = 'Awards & Certifications' style={styles.container} onPress={AwardsNavigation}/>
        <Button title = 'Interests & Hobbies' style={styles.container} onPress={Hobbies}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  header: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy', 
    color: colors.DARK,
  },
});