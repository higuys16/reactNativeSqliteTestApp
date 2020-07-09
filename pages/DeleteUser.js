/*Screen to delete the user*/
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

//components
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import MyView from './styledComponents/MyView';

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
    <MyView>
      <MyTextInput
        placeholder="Enter User Id"
        value={user.id}
        onChangeText={changeId}
        style={{padding: 10}}
      />
      <MyButton
        title="Delete User"
        onClick={deleteUser}
      />
    </MyView>
  );
}
