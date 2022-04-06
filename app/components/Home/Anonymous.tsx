import { Trans } from '@lingui/react';
import React from 'react';
import { Container, Flex } from '~/components/components';
import { Typography } from '~/components/Typography';
import { Button } from '../Button';

export const Anonymous = (): React.ReactElement => (
  <Container>
    <Typography variant="BoldHeadline4" as="h4" pb="24px" textAlign="start">
      <Trans id="home_main_header" />
    </Typography>
    <Typography variant="BoldHeadline6" pb="40px" textAlign="start">
      <Trans id="home_main_claim" />
    </Typography>
    <Flex flexDirection="column" alignItems="center">
      <Flex mb="20px">
        <Button
          type="button"
          onClick={() => console.log('sign up')}
        >
          <Trans id="global__sign_up" />
        </Button>
      </Flex>
      <Button
        type="button"
        onClick={() => console.log('registration')}
      >
        <Trans id="registration" />
      </Button>
    </Flex>
  </Container>
);
