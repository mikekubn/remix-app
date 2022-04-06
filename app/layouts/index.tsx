import React from 'react';
import styled from 'styled-components';

const Layout = ({
  children,
}: React.PropsWithChildren<unknown>): React.ReactElement => (
  <Main>{children}</Main>
);

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 20px;
`;

export default Layout;
