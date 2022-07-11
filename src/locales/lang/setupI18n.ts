import { createI18n } from 'vue-i18n'


export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export function setI18nLanguage(i18n, locale:string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
   document?.querySelector('html')?.setAttribute('lang', locale)
}


export async function importLoacle(i18n,local:string,localeUrl:string){
    try{
        i18n.global.setLocaleMessage(local, await import(localeUrl).default);
    }catch{

    }
    
}

export async function loadLocaleMessages(i18n, locale:string) {
    if (!i18n.global.availableLocales.includes(locale)) {
        await loadLocaleMessages(i18n, locale)
    }
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  )

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

export function installI18n(app: App) {
    const i18n = createI18n({
        
    })

}