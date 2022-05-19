import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainMenu from '../screens/MainMenu';
import NoteScreen from '../screens/NoteScreen';
import HomeNotes from '../screens/HomeNotes';
import LoveNotes from '../screens/LoveNotes';
import FamilyNotes from '../screens/FamilyNotes';
import FriendNotes from '../screens/FriendNotes';
import SchoolNotes from '../screens/SchoolNotes';


const screens = {
  'Main Menu': {
    screen: MainMenu
  },
  'Your Notes': {
    screen: NoteScreen
  },
  'Home Notes': {
    screen: HomeNotes
  },
  'Love Notes': {
    screen: LoveNotes
  },
  'Family Notes': {
    screen: FamilyNotes
  },
  'Friend Notes': {
    screen: FriendNotes
  },
  'School Notes': {
    screen: SchoolNotes
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);