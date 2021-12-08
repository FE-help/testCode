import en from './en_US';
import zh_CN from './zh_CN';
import zh_TW from './zh_TW';
import { createI18n } from 'vue-i18n';
import cookie from 'js-cookie'

const local = cookie.get('language');
const i18n = createI18n({
  locale: local || 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    zh_CN,
    zh_TW
  }
});
export default i18n
