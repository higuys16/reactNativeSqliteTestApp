/*Custom Button*/
import React from 'react';
import styled from 'styled-components/native';

const MyButton = props => {
  return (
    <TouchableOpacityS onPress={props.onClick}>
      <TextS>{props.title}</TextS>
    </TouchableOpacityS>
  );
};

const TouchableOpacityS = styled.TouchableOpacity`
  align-items: center;
  background-color: #f05555;
  color: #ffffff;
  padding: 10px;
  margin: 8px 35px 8px 35px;
`;

const TextS = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export default MyButton;
