import React from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { en } from 'make-plural/plurals';
import enMessages from '../../../public/locales/en/messages.json';

i18n.loadLocaleData({
  en: { plurals: en },
});

i18n.load({
  en: enMessages,
});
i18n.activate('en');

const I18nLoader = ({ children }: React.PropsWithChildren<unknown>): React.ReactElement => (
  <I18nProvider i18n={i18n}>
    {children}
  </I18nProvider>
);

export default I18nLoader;
