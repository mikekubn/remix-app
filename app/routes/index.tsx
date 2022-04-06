import React from 'react';
import type { MetaFunction } from 'remix';
import { Flex } from '~/components/components';
import { Anonymous } from '~/components/Home/Anonymous';

export const meta: MetaFunction = () => ({
  title: 'Remix app',
  description: 'Test  remix app',
});

const Index = (): React.ReactElement => (
  <Flex maxWidth="1220px" m="0 auto">
    <Anonymous />
  </Flex>
);

export default Index;
