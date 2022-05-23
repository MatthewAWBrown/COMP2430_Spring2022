import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home';
import Education from '../Screens/Education';
import Lakehead from '../Screens/Lakehead';
import Athabasca from '../Screens/Athabasca';
import MountAllison from '../Screens/MountAllison';
import Employment from '../Screens/Employment';
import Awards from '../Screens/Awards';
import Hobbies from '../Screens/Hobbies';

const screens = {
  Home: {
    screen: Home
  },
  Education: {
    screen: Education
  },
  Lakehead: {
    screen: Lakehead
  },
  Athabasca: {
    screen: Athabasca
  },
  MountAllison: {
    screen: MountAllison
  },
  Employment: {
    screen: Employment
  },
  Awards: {
    screen: Awards
  },
  Hobbies: {
    screen: Hobbies
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);