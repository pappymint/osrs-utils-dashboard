import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useRuneAlchCalcStore = defineStore('runeAlchCalcStore', () => {
  const runeBarCount = ref(useLocalStorage('runeBarCount', 0))

  return {
    runeBarCount
  }
})
