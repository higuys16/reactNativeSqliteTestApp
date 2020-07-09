import React from 'react';
import t from '../localization/stringsoflanguages';
import MyView from './styledComponents/MyView';
import MyButton from './components/MyButton';

export default function LanguageSelectionScreen(props) {
  const lang = [
    {shortform: 'en', longform: 'English'},
    {shortform: 'ru', longform: 'Русский'},
  ];

  const settext = value => {
    t.setLanguage(value);
    props.navigation.navigate('Home', {token: '<new token>'});
  };

  return (
    <MyView>
      {lang.map((item, key) => (
        <MyButton
          key={key}
          onClick={() => settext(item.shortform)}
          title={item.longform}
        />
      ))}
    </MyView>
  );
}

LanguageSelectionScreen.navigationOptions = () => ({
  title: t.select_lang,
});
