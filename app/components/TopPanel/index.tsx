import React from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/react';
import { Brand } from '~/components/Brand';
import { Flex } from '~/components/components';
import { Typography } from '~/components/Typography';

const TopPanel = (): React.ReactElement => (
  <TopPanelContainer>
    <Brand />
    <Flex ml="auto" p="0 40px" flexDirection="row" alignItems="center">
      <Typography variant="BodySmall" fontFamily="LSFinder" fontWeight="bold" pr="20px">
        <Trans id="header_have_account" />
      </Typography>
      <button
        type="button"
        onClick={() => console.log('click on sign in.')}
      >
        <Trans id="global__sign_in" />
      </button>
    </Flex>
  </TopPanelContainer>
);

const TopPanelContainer = styled.header`
  z-index: 50;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background-color: #a2b9bc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default TopPanel;
