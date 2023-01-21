import type { App } from 'vue'

import router from '@/router'

import i18n from './i18n'
import pinia from './pinia'
import vuetify from './vuetify'
import { loadFonts } from './webfontloader'

export function registerPlugins(app: App) {
  loadFonts()
  app.use(i18n).use(vuetify).use(router).use(pinia)
}
