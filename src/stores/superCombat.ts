import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useSuperCombatStore = defineStore('superCombatStore', () => {
  const superStrCost = ref(useLocalStorage('superStrCost', 0))
  const superAttCost = ref(useLocalStorage('superAttCost', 0))
  const superDefCost = ref(useLocalStorage('superDefCost', 0))
  const torstolCost = ref(useLocalStorage('torstolCost', 0))
  const superCombatSalePrice = ref(useLocalStorage('superCombatSalePrice', 0))

  const totalCostOfPot = computed(() => {
    return superStrCost.value + superAttCost.value + superDefCost.value + torstolCost.value
  })

  const salePriceMinusTax = computed(() => {
    return Math.round(superCombatSalePrice.value * 0.99)
  })

  const totalProfit = computed(() => {
    return Math.round(salePriceMinusTax.value - totalCostOfPot.value)
  })

  const resetAllInputs = () => {
    superStrCost.value = 0
  }

  return {
    superStrCost,
    superAttCost,
    superDefCost,
    torstolCost,
    superCombatSalePrice,
    totalCostOfPot,
    salePriceMinusTax,
    totalProfit,
    resetAllInputs
  }
})
