/*Screen to view single user*/
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

//components
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import MyView from './styledComponents/MyView';
import t from '../localization/stringsoflanguages';
import MyText from './styledComponents/MyText';

var db = openDatabase({name: 'UserDatabase.db'});
export default function ViewUser({navigation} = {}) {
  let [user, setUser] = useState({
    id: '',
    name: '',
    contact: '',
    address: '',
  });


  let [title, setTitle] = useState('');

  useEffect(() => {
    navigation.setParams({title: title});
  }, [title]);

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
        placeholder={t.e_id}
        value={user.id}
        onChangeText={changeId}
        style={{padding: 10}}
      />
      <MyButton title={t.u_search} onClick={searchUser} />
      <MyView style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
        <MyText>
          {t.u_id}: {user.id}
        </MyText>
        <MyText>
          {t.u_name}: {user.name}
        </MyText>
        <MyText>
          {t.u_contact}: {user.contact}
        </MyText>
        <MyText>
          {t.u_address}: {user.address}
        </MyText>
      </MyView>
    </MyView>
  );
}

ViewUser.navigationOptions = () => ({
  title: t.view,
});
