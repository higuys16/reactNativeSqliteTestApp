/*Screen to view single user*/
import React, {useState} from 'react';
import {Text} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

//components
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import MyView from './styledComponents/MyView';

var db = openDatabase({name: 'UserDatabase.db'});
export default function ViewUser(props) {
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
          setUser({
            ...user,
            name: results.rows.item(0).name,
            contact: results.rows.item(0).contact,
            address: results.rows.item(0).address,
          });
        } else {
          alert('No user found');
          setUser({
            id: '',
            name: '',
            contact: '',
            address: '',
          });
        }
      });
    });
  };

  const changeId = text => {
    setUser({...user, id: text});
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
        title="Search User"
        onClick={searchUser}
      />
      <MyView style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
        <Text>User Id: {user.id}</Text>
        <Text>User Name: {user.name}</Text>
        <Text>User Contact: {user.contact}</Text>
        <Text>User Address: {user.address}</Text>
      </MyView>
    </MyView>
  );
}
