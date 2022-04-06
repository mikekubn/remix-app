import {
  MetaFunction,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import React from 'react';
import styled from 'styled-components';
import { Flex } from './components/components';
import Layout from './layouts';
import TopPanel from './components/TopPanel';
import Footer from './components/Footer';
import { GlobalStyling } from './styles';
import I18nLoader from './lib/lingui/I18nLoader';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Flash TV',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader = () => ({
  ENV: {
    LSTV_GRAPHQL_API_URL: process.env.TEST_ENV_URL,
    LSTV_BROWSER_APP_URL: process.env.TEST_ENV_VALUE,
  },
});

const Document = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="icon" href="/favicon.png" />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
      </body>
    </html>
  );
};

const App = () => (
  <Document>
    <GlobalStyling />
    <I18nLoader>
      <PageLayoutContainer>
        <TopPanel />
        <Layout>
          <Outlet />
        </Layout>
        <Footer />
      </PageLayoutContainer>
    </I18nLoader>
  </Document>
);

export default App;

const PageLayoutContainer = styled(Flex)`
  text-align: center;
  flex-direction: column;
  min-height: 100vh;
`;
