import React from 'react';
import { Flex } from '~/components/components';
import { Typography } from '~/components/Typography';
import styled from 'styled-components';
import { Trans } from '@lingui/react';

const Footer = (): React.ReactElement => (
  <Bottom>
    <Flex flexDirection="row" alignItems="center">
      <Typography variant="BoldBodySmall" pr="20px">
        <Trans id="terms_of_service" />
      </Typography>
      <Typography variant="BoldBodySmall" fontWeight="bold">
        <Trans id="about_flashtv" />
      </Typography>
    </Flex>
  </Bottom>
);

const Bottom = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
`;

export default Footer;
