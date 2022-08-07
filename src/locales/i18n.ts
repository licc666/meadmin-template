import { App } from 'vue';
import { createI18n, I18nOptions } from 'vue-i18n';
import { localeConfig as config } from '@/config';
import { setI18nLanguage } from './helper';
import { useGlobalStore } from '@/store';

//安装VueI18n
export const installI18n = async (app: App) => {
  const options = Object.assign(config.localeSetting, { legacy: false, locale: undefined, globalInjection: true });
  let i18n = createI18n(options as { legacy: false, globalInjection: true } & I18nOptions);
  useGlobalStore().i18n = i18n.global;
  await setI18nLanguage(config.localeSetting.locale || 'zh-cn', false);
  app.use(i18n);
}
export * from './helper';
export * from './hooks';