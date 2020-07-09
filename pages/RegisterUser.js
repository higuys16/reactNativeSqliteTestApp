/*Screen to register the user*/
import React, {useState} from 'react';
import {ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

//components
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import MyView from './styledComponents/MyView';


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
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    {cancelable: false},
                  );
                } else {
                  alert('Registration Failed');
                }
              },
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
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

  return (
    <MyView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <MyTextInput
            placeholder="Enter Name"
            onChangeText={changeName}
            value={user.name}
            style={{padding: 10}}
          />
          <MyTextInput
            placeholder="Enter Contact No"
            onChangeText={changeContact}
            value={user.contact}
            maxLength={10}
            keyboardType="numeric"
            style={{padding: 10}}
          />
          <MyTextInput
            placeholder="Enter Address"
            onChangeText={changeAddress}
            value={user.address}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10}}
          />
          <MyButton title="Submit" onClick={register_user} />
        </KeyboardAvoidingView>
      </ScrollView>
    </MyView>
  );
}
