/*Custom TextInput*/
import React from 'react';
import styled from 'styled-components/native';
import {primary} from '../../variables/colors';

const MyTextInput = props => {
  return (
    <ViewS>
      <TextInputS
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </ViewS>
  );
};

const TextInputS = styled.TextInput.attrs({
  placeholderTextColor: primary.placeholder,
})`
  background-color: ${primary.input};
  color: ${primary.background};
`;

const ViewS = styled.View`
  margin: 5px;
  border: solid 2px ${primary.border};
`;

export default MyTextInput;
