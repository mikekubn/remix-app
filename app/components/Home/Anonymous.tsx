import { Trans } from '@lingui/react';
import React from 'react';
import { Container } from '~/components/components';
import { Typography } from '~/components/Typography';

export const Anonymous = (): React.ReactElement => (
  <Container>
    <Typography variant="BoldHeadline4" as="h4" pb="24px" textAlign="start">
      <Trans id="home_main_header" />
    </Typography>
    <Typography variant="BoldHeadline6" pb="40px" textAlign="start">
      <Trans id="home_main_claim" />
    </Typography>
    <button
      type="button"
      onClick={() => console.log('sign up')}
    >
      <Trans id="global__sign_up" />
    </button>
    <button
      type="button"
      onClick={() => console.log('registration')}
    >
      <Trans id="registration" />
    </button>
  </Container>
);
