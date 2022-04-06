import React from 'react';
import styled from 'styled-components';

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = styled.button<IProps>`
  padding: 0;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  font-size: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  font-size: medium;
  width: 200px;
  height: 40px;

  &:hover,
  &:focus {
    text-decoration: none;
    color: cadetblue;
  }
`;
