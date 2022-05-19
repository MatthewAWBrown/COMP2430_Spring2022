import React, { useEffect, useState } from 'react';
import { View,
  StyleSheet,
  Text,  
  SafeAreaView,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import colors from '../misc/Colors.js';
import RoundIconBtn from '../components/RoundIconBtn';
import NoteInputModal from '../components/NoteInputModal';
import AsyncStorage from '@react-native-community/async-storage';
import Note from '../components/Notes';
import NoteDetails from '../components/NoteDetail';

const NoteScreen = () => {

  const [notes, setNotes] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const handleOnSubmit = async (title, desc) => {
      const note = {id: Date.now(), title, desc, time: Date.now() };
      const updatedNotes = [...notes, note];
      setNotes(updatedNotes);
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    if(result !== null) setNotes(JSON.parse(result));
  };

  useEffect(() => {
    findNotes();
  }, []);

  return (
    <SafeAreaView style={styles.container}> 
      <FlatList 
        data={notes} 
        numColumns={2} 
        columnWrapperStyle ={{
          justifyContent: 'space-between', 
          marginBottom: 15,
        }} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({ item }) => (
          <Note onPress={() => console.log('pressing')} item={item} />
        )}
      />
      {!notes.length ? (<View style={[ StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
        <Text style={styles.emptyHeader}>Add Notes</Text>
      </View>) : null}
      <NoteInputModal visible={modalVisible} onClose={() => setModalVisible(false)} onSubmit={handleOnSubmit}/>
      <RoundIconBtn onPress={() => setModalVisible(true)} antIconName = 'plus' style={styles.addBtn}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 20,
  },
  emptyHeader:{
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
  },
  emptyHeaderContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  addBtn: {
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
});

export default NoteScreen;