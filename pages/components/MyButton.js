/*Custom Button*/
import React from 'react';
import styled from 'styled-components/native';
import {primary} from '../../variables/colors';

const MyButton = props => {
  return (
    <TouchableOpacityS onPress={props.onClick}>
      <TextS>{props.title}</TextS>
    </TouchableOpacityS>
  );
};

const TouchableOpacityS = styled.TouchableOpacity`
  align-items: center;
  background-color: ${primary.button};
  border-radius: 5px;
  border: solid 1px ${primary.border};
  padding: 10px;
  margin: 5px;
`;

const TextS = styled.Text`
  color: ${primary.border};
  font-weight: bold;
`;

export default MyButton;
