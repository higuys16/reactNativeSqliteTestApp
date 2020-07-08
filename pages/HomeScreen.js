/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import {View} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import {openDatabase} from 'react-native-sqlite-storage';

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
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <Mytext text="SQLite Example"/>
      <Mybutton
        title="Register"
        customClick={() => props.navigation.navigate('Register')}
      />
      <Mybutton
        title="Update"
        customClick={() => props.navigation.navigate('Update')}
      />
      <Mybutton
        title="View"
        customClick={() => props.navigation.navigate('View')}
      />
      <Mybutton
        title="View All"
        customClick={() => props.navigation.navigate('ViewAll')}
      />
      <Mybutton
        title="Delete"
        customClick={() => props.navigation.navigate('Delete')}
      />
    </View>
  );

}
