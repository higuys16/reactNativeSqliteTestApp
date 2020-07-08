/*Screen to delete the user*/
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});
export default function UpdateUser(props) {
  let [user, setUser] = useState({
    id: '',
  });

  const deleteUser = () => {
    const {id} = user;
    db.transaction(tx => {
      tx.executeSql('DELETE FROM  users where id=?', [id], (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Success',
            'User deleted successfully',
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('HomeScreen'),
              },
            ],
            {cancelable: false},
          );
        } else {
          setUser({id: ''});
          alert('Please insert a valid User Id');
        }
      });
    });
  };

  const changeId = text => {
    setUser({id: text});
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Mytextinput
        placeholder="Enter User Id"
        value={user.id}
        onChangeText={changeId}
        style={{padding: 10}}
      />
      <Mybutton
        title="Delete User"
        customClick={deleteUser}
      />
    </View>
  );
}
