import 'i18next';
import type en from './locales/en.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'en'
        returnNull: false
        resources: typeof en
        nsSeparator: '.'
    }
}
