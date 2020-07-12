/*Screen to update the user*/
import React, {useRef, useState} from 'react';
import {ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

//components
import MyButton from './components/MyButton';
import MyTextInput from './styledComponents/MyTextInput';
import MyView from './styledComponents/MyView';
import t from '../localization/stringsoflanguages';

export default function UpdateUser(props) {
  let [user, setUser] = useState({
    id: '',
    name: '',
    contact: '',
    address: '',
  });

  const searchUser = () => {
    const {id} = user;
    console.log(user.id);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM users where id = ?', [id], (tx, results) => {
        var len = results.rows.length;
        console.log('len', len);
        if (len > 0) {
          console.log(results.rows.item(0).contact);
          setUser({
            ...user,
            name: results.rows.item(0).name,
            contact: results.rows.item(0).contact,
            address: results.rows.item(0).address,
          });

        } else {
          alert(t.err_user_not_found);
          setUser({
            name: '',
            contact: '',
            address: '',
          });
        }
      });
    });
  };
  const updateUser = () => {
    let {id, name, contact, address} = user;
    if (name) {
      if (contact) {
        if (address) {
          db.transaction(tx => {
            tx.executeSql(
              'UPDATE users set name=?, contact=? , address=? where id=?',
              [name, contact, address, id],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    t.mes_upd_success,
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          props.navigation.navigate('Home'),
                      },
                    ],
                    {cancelable: false},
                  );
                } else {
                  alert(t.err_upd_failed);
                }
              },
            );
          });
        } else {
          alert(t.war_reg_address);
        }
      } else {
        alert(t.war_reg_contact);
      }
    } else {
      alert(t.war_reg_name);
    }
  };

  const changeName = text => {
    setUser({...user, name: text});
  };
  const changeContact = text => {
    setUser({...user, contact: text});
  };
  const changeAddress = text => {
    setUser({...user, address: text});
  };
  const changeId = text => {
    setUser({...user, id: text});
  };

  const ref_contact = useRef();
  const ref_address = useRef();

  return (
    <MyView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <MyTextInput
            placeholder={t.e_id}
            style={{padding: 10}}
            value={user.id}
            onChangeText={changeId}
          />
          <MyButton
            title={t.u_search}
            onClick={searchUser}
          />
          <MyTextInput
            placeholder={t.e_name}
            value={user.name}
            style={{padding: 10}}
            onChangeText={changeName}
            onSubmitEditing={() => ref_contact.current.focus()}
          />
          <MyTextInput
            placeholder={t.e_contact}
            value={user.contact}
            onChangeText={changeContact}
            maxLength={10}
            style={{padding: 10}}
            keyboardType="numeric"
            onSubmitEditing={() => ref_address.current.focus()}
            ref={ref_contact}
          />
          <MyTextInput
            value={user.address}
            placeholder={t.e_address}
            onChangeText={changeAddress}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10}}
            ref={ref_address}
          />
          <MyButton
            title={t.u_update}
            onClick={updateUser}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </MyView>
  );
}

UpdateUser.navigationOptions = () => ({
  title: t.update,
});
