import {TranslocoGlobalConfig} from '@jsverse/transloco-utils';
    
const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: [ 'en', 'es' ],
  keysManager: {
    unflat: true,
    input: 'src',
    output: 'src/assets/i18n',
  }
};
    
export default config;