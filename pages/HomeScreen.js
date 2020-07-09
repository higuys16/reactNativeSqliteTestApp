/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import {openDatabase} from 'react-native-sqlite-storage';

//components
import MyButton from './components/MyButton';
import MyText from './components/MyText';
import MyView from './styledComponents/MyView';

var db = openDatabase({name: 'UserDatabase.db'});
export default function HomeScreen(props) {
  db.transaction(function (txn) {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
      [],
      function (tx, res) {
        console.log('item:', res.rows.length);
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS users', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), contact INT(10), address VARCHAR(255))',
            [],
          );
        }
      },
    );
  });

  return (
    <MyView>
      <MyText text="SQLite Example" />
      <MyButton
        title="Register"
        onClick={() => props.navigation.navigate('Register')}
      />
      <MyButton
        title="Update"
        onClick={() => props.navigation.navigate('Update')}
      />
      <MyButton
        title="View"
        onClick={() => props.navigation.navigate('View')}
      />
      <MyButton
        title="View All"
        onClick={() => props.navigation.navigate('ViewAll')}
      />
      <MyButton
        title="Delete"
        onClick={() => props.navigation.navigate('Delete')}
      />
    </MyView>
  );
}
