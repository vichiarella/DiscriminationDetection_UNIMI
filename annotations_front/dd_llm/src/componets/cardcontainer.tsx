import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #FBFBFB;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 15px;
  box-sizing: border-box;
`;
// max-width: 400px;
interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
