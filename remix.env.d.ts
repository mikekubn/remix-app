/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Window {
  ENV: {
    LSTV_GRAPHQL_API_URL: string,
    LSTV_BROWSER_APP_URL: string
  }
}
