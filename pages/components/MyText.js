/*Custom Text*/
import React from 'react';
import styled from 'styled-components/native';

const MyText = props => {
  return <TextS>{props.text}</TextS>;
};

const TextS = styled.Text`
  color: #f05555;
  font-size: 18px;
  margin: 8px 35px;
  font-weight: bold;
`;

export default MyText;
