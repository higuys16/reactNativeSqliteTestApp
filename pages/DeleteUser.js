/*Screen to delete the user*/
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

//components
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import MyView from './styledComponents/MyView';
import t from '../localization/stringsoflanguages';

var db = openDatabase({name: 'UserDatabase.db'});
export default function DeleteUser(props) {
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
            t.mes_del_success,
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('Home'),
              },
            ],
            {cancelable: false},
          );
        } else {
          setUser({id: ''});
          alert(t.err_del_failed);
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
        placeholder={t.e_id}
        value={user.id}
        onChangeText={changeId}
        style={{padding: 10}}
      />
      <MyButton
        title={t.u_delete}
        onClick={deleteUser}
      />
    </MyView>
  );
}

DeleteUser.navigationOptions = () => ({
  title: t.delete,
});
