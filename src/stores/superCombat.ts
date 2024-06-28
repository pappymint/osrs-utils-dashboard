import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import {
  SUPER_ATT_ID,
  SUPER_DEF_ID,
  SUPER_STR_ID,
  TORSTOL_ID,
  SUPER_COMBAT_ID
} from '@/utils/itemIDs'
import { getGEStatsForItem } from '@/api/gePrices'

interface GEPriceStats {
  high: number
  highTime: number
  low: number
  lowTime: number
}

export const useSuperCombatStore = defineStore('superCombatStore', () => {
  const superStrCost = ref(useLocalStorage('superStrCost', 0))
  const superAttCost = ref(useLocalStorage('superAttCost', 0))
  const superDefCost = ref(useLocalStorage('superDefCost', 0))
  const torstolCost = ref(useLocalStorage('torstolCost', 0))
  const superCombatSalePrice = ref(useLocalStorage('superCombatSalePrice', 0))

  const fetchingGEPrices = ref(false)
  const gePriceSuperStr: Ref<GEPriceStats | undefined> = ref()
  const gePriceSuperAtt: Ref<GEPriceStats | undefined> = ref()
  const gePriceSuperDef: Ref<GEPriceStats | undefined> = ref()
  const gePriceTorstol: Ref<GEPriceStats | undefined> = ref()
  const gePriceSuperCombat: Ref<GEPriceStats | undefined> = ref()

  const totalCostOfPot = computed(() => {
    return superStrCost.value + superAttCost.value + superDefCost.value + torstolCost.value
  })

  const salePriceMinusTax = computed(() => {
    return Math.round(superCombatSalePrice.value * 0.99)
  })

  const totalProfit = computed(() => {
    return Math.round(salePriceMinusTax.value - totalCostOfPot.value)
  })

  const gePriceProfit = computed(() => {
    if (fetchingGEPrices.value) {
      return '-'
    }
    return (
      Math.round(gePriceSuperCombat.value?.high ?? 0 * 0.99) -
      ((gePriceSuperStr.value?.high ?? 0) +
        (gePriceSuperAtt.value?.high ?? 0) +
        (gePriceSuperDef.value?.high ?? 0) +
        (gePriceTorstol.value?.high ?? 0))
    )
  })

  const resetAllInputs = () => {
    superStrCost.value = 0
    superAttCost.value = 0
    superDefCost.value = 0
    torstolCost.value = 0
    superCombatSalePrice.value = 0
  }

  const fetchGePrices = async () => {
    fetchingGEPrices.value = true
    gePriceSuperAtt.value = await getGEStatsForItem(SUPER_ATT_ID)
    gePriceSuperStr.value = await getGEStatsForItem(SUPER_STR_ID)
    gePriceSuperDef.value = await getGEStatsForItem(SUPER_DEF_ID)
    gePriceTorstol.value = await getGEStatsForItem(TORSTOL_ID)
    gePriceSuperCombat.value = await getGEStatsForItem(SUPER_COMBAT_ID)
    fetchingGEPrices.value = false
  }

  return {
    superStrCost,
    superAttCost,
    superDefCost,
    torstolCost,
    superCombatSalePrice,
    fetchingGEPrices,
    gePriceSuperStr,
    gePriceSuperAtt,
    gePriceSuperDef,
    gePriceTorstol,
    gePriceSuperCombat,

    totalCostOfPot,
    salePriceMinusTax,
    totalProfit,
    gePriceProfit,

    resetAllInputs,
    fetchGePrices
  }
})
