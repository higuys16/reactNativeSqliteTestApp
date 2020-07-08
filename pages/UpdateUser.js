/*Screen to update the user*/
import React, {useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

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
          alert('No user found');
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
                    'User updated successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    {cancelable: false},
                  );
                } else {
                  alert('Updation Failed');
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
  const changeId = text => {
    setUser({...user, id: text});
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <Mytextinput
            placeholder="Enter User Id"
            style={{padding: 10}}
            value={user.id}
            onChangeText={changeId}
          />
          <Mybutton
            title="Search User"
            customClick={searchUser}
          />
          <Mytextinput
            placeholder="Enter Name"
            value={user.name}
            style={{padding: 10}}
            onChangeText={changeName}
          />
          <Mytextinput
            placeholder="Enter Contact No"
            value={user.contact}
            onChangeText={changeContact}
            maxLength={10}
            style={{padding: 10}}
            keyboardType="numeric"
          />
          <Mytextinput
            value={user.address}
            placeholder="Enter Address"
            onChangeText={changeAddress}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10}}
          />
          <Mybutton
            title="Update User"
            customClick={updateUser}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}
