/*Example of SQLite Database in React Native*/
import React from 'react';

//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const headerStyles = {
  backgroundColor: '#f05555',
  height: 45,
};
const headerTintColor = '#ffffff';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
      headerTitleStyle: {
        textAlign: 'center',
      },
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: headerStyles,
      headerTintColor: headerTintColor,
    },
  },
});
export default createAppContainer(App);
