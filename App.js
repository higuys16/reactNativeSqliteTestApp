/*Example of SQLite Database in React Native*/
import React from 'react';

//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewUserId from './pages/ViewUserId';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import LanguageSelectionScreen from './pages/LanguageSelectionScreen';

const headerStyles = {
  backgroundColor: '#f05555',
  height: 45,
};
const headerTintColor = '#ffffff';

const App = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },

  ViewId: {
    screen: ViewUserId,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  Language: {
    screen: LanguageSelectionScreen,
    navigationOptions: {
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
});
export default createAppContainer(App);
