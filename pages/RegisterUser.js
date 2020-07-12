/*Screen to register the user*/
import React, {useState, useRef} from 'react';
import {ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

//components
import MyButton from './components/MyButton';
import MyTextInput from './styledComponents/MyTextInput';
import MyView from './styledComponents/MyView';
import t from '../localization/stringsoflanguages';

export default function RegisterUser(props) {
  let [user, setUser] = useState({
    name: '',
    contact: '',
    address: '',
  });

  const register_user = () => {
    const {name, contact, address} = user;

    if (name) {
      if (contact) {
        if (address) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO users (name, contact, address) VALUES (?,?,?)',
              [name, contact, address],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    t.mes_reg_success,
                    [
                      {
                        text: 'Ok',
                        onPress: () => props.navigation.navigate('Home'),
                      },
                    ],
                    {cancelable: false},
                  );
                } else {
                  alert(t.err_reg_failed);
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

  const ref_contact = useRef();
  const ref_address = useRef();

  return (
    <MyView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <MyTextInput
            placeholder={t.e_name}
            onChangeText={changeName}
            value={user.name}
            style={{padding: 10}}
            onSubmitEditing={() => ref_contact.current.focus()}
          />
          <MyTextInput
            placeholder={t.e_contact}
            onChangeText={changeContact}
            value={user.contact}
            maxLength={10}
            keyboardType="numeric"
            style={{padding: 10}}
            onSubmitEditing={() => ref_address.current.focus()}
            ref={ref_contact}
          />
          <MyTextInput
            placeholder={t.e_address}
            onChangeText={changeAddress}
            value={user.address}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10}}
            ref={ref_address}
          />
          <MyButton title={t.submit} onClick={register_user} />
        </KeyboardAvoidingView>
      </ScrollView>
    </MyView>
  );
}

RegisterUser.navigationOptions = () => ({
  title: t.register,
});
