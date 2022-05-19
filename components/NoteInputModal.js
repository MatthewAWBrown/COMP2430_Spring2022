import React, { useState }from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import colors from '../misc/Colors';
import RoundIconBtn from './RoundIconBtn';

const NoteInputModal = ({visible, onClose, onSubmit}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text, valueFor) => {
    if(valueFor === 'title') setTitle(text);
    if(valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if(!title.trim() && !desc.trim()) return onClose();
    onSubmit(title, desc);
    setTitle('');
    setDesc('');
    onClose;
  };

  const closeModal = () => {
    setTitle('');
    setDesc('');
    onClose;
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Modal visible={visible} animationType = 'slide'>
            <View style={styles.container}>
              <TextInput 
                placeholder = 'Title' 
                style={[styles.input, styles.title]}
                onChangeText={(text) => handleOnChangeText(text, 'title')} 
              />
              <TextInput 
                multiline 
                placeholder = 'Note' 
                style={[styles.input, styles.desc]}
                onChangeText={(text) => handleOnChangeText(text, 'desc')}
              />
              <View style={styles.btnContainer}>
                { title.trim() || desc.trim() ? (<RoundIconBtn size={15} antIconName='close' onPress={closeModal}/>) : null} 
                <RoundIconBtn size={15} style={{ marginLeft: 30 }} antIconName='check' onPress={handleSubmit}/>
              </View>
            </View>
            <TouchableWithoutFeedback onPress={handleModalClose}>
              <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}/>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    fontSize: 20,
    color: colors.DARK,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  desc: {
    heigh: 100,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 30,
  },
});

export default NoteInputModal;