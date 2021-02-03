import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend';

let lng = 'en';
const storageLanguage = localStorage.getItem('language');
if (storageLanguage) {
  lng = storageLanguage;
}

i18n
  .use(XHR)
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng,
    backend: {
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
      allowMultiLoading: true
    },
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      useSuspense: true,
      wait: true
    }
  })

export default i18n