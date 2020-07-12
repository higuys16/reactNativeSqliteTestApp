/*Screen to view single user*/
import React, {useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';

//components
import MyView from './styledComponents/MyView';
import t from '../localization/stringsoflanguages';
import MyText from './styledComponents/MyText';

var db = openDatabase({name: 'UserDatabase.db'});
export default function ViewUserId(props) {
  let [user, setUser] = useState({
    id: props.navigation.state.params.id,
    name: '',
    contact: '',
    address: '',
  });
  console.log(props.navigation.state.params.id);
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
  useState(function() {
    searchUser();
  });
  return (
    <MyView>
      <MyView style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
        <MyText>{t.u_id}: {user.id}</MyText>
        <MyText>{t.u_name}: {user.name}</MyText>
        <MyText>{t.u_contact}: {user.contact}</MyText>
        <MyText>{t.u_address}: {user.address}</MyText>
      </MyView>
    </MyView>
  );
}


ViewUserId.navigationOptions = () => ({
  title: t.view,
});
