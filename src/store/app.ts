import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({}),

  persist: { enabled: true }
})
