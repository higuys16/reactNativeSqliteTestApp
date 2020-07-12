/*Custom TextInput*/
import React from 'react';
import styled from 'styled-components/native';
import {primary} from '../../variables/colors';

const MyTextInput = styled.TextInput.attrs({
  placeholderTextColor: primary.placeholder,
})`
  background-color: ${primary.input};
  color: ${primary.background};
  margin: 5px;
  border: solid 2px ${primary.border};
`;

export default MyTextInput;
