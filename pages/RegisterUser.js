/*Screen to register the user*/
import React, {useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

export default function RegisterUser(props) {
  let [state, setState] = useState({
    user_name: '',
    user_contact: '',
    user_address: '',
  });

  const register_user = () => {
    const {user_name, user_contact, user_address} = state;

    if (user_name) {
      if (user_contact) {
        if (user_address) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
              [user_name, user_contact, user_address],
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
    setState({...state, user_name: text});
  };
  const changeContact = text => {
    setState({...state, user_contact: text});
  };
  const changeAddress = text => {
    setState({...state, user_address: text});
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <Mytextinput
            placeholder="Enter Name"
            onChangeText={changeName}
            value={state.user_name}
            style={{padding: 10}}
          />
          <Mytextinput
            placeholder="Enter Contact No"
            onChangeText={changeContact}
            value={state.user_contact}
            maxLength={10}
            keyboardType="numeric"
            style={{padding: 10}}
          />
          <Mytextinput
            placeholder="Enter Address"
            onChangeText={changeAddress}
            value={state.user_address}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10}}
          />
          <Mybutton title="Submit" customClick={register_user} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}
