import { createI18n } from 'vue-i18n'

export default createI18n({
  locale: window.navigator.language,
  fallbackLocale: 'pt-BR'
})
