/*Custom TextInput*/
import React from 'react';
import styled from 'styled-components/native';

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
  placeholderTextColor: '#007FFF',
})`
  background-color: #edf6ff;
  color: #007fff;
`;

const ViewS = styled.View`
  margin: 5px 35px;
  border: solid 1px #007fff;
`;

export default MyTextInput;
