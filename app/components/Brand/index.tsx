import React from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography';

const Brand = (): React.ReactElement => (
  <BrandCmp href="/">
    <img src="/img/myself.png" alt="Logomark" style={{ height: '30px', width: '30px' }} />
    <Typography
      variant="BrandHeadline6"
      color="red"
      as="h1"
      pr="40px"
      data-cy="header-flash-tv"
    >
      MIRA
      {' '}
      <span>WEB</span>
    </Typography>
  </BrandCmp>
);

const BrandCmp = styled.a`
  padding-left: 40px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  min-width: fit-content;
  height: 32px;
  text-decoration: none;
  gap: 18px;
`;

export { Brand };
