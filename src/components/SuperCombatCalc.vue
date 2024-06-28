<template>
  <p>Super combat calc</p>

  <div class="calc-input">
    <label for="superStrCost" class="font-bold block mb-2">Super strength (4)</label>
    <GPNumberInput
      v-model="store.superStrCost"
      inputId="superStrCost"
      class="calc-input--number-input"
    />
  </div>

  <div class="calc-input">
    <label for="superAttCost" class="font-bold block mb-2">Super attack (4)</label>
    <GPNumberInput
      v-model="store.superAttCost"
      inputId="superAttCost"
      class="calc-input--number-input"
    />
  </div>

  <div class="calc-input">
    <label for="superDefCost" class="font-bold block mb-2">Super defence (4)</label>
    <GPNumberInput
      v-model="store.superDefCost"
      inputId="superDefCost"
      class="calc-input--number-input"
    />
  </div>

  <div class="calc-input">
    <label for="torstolCost" class="font-bold block mb-2">Torstol</label>
    <GPNumberInput
      v-model="store.torstolCost"
      inputId="torstolCost"
      class="calc-input--number-input"
    />
  </div>

  <div class="calc-input">
    <label for="superCombatSalePrice" class="font-bold block mb-2"
      >GE sale price for super combat (4)</label
    >
    <GPNumberInput
      v-model="store.superCombatSalePrice"
      inputId="superCombatSalePrice"
      class="calc-input--number-input"
    />
  </div>

  <p>Total ingredients cost: {{ store.totalCostOfPot }}</p>
  <p>
    GE price for Super Combat Potion (4): {{ store.superCombatSalePrice }} (Minus tax:
    {{ store.salePriceMinusTax }})
  </p>
  <p>Total profit: {{ store.totalProfit }}</p>

  <Button @click="store.resetAllInputs">Reset inputs</Button>
</template>

<script lang="ts" setup>
import Button from 'primevue/button'
import { useSuperCombatStore } from '@/stores/superCombat'
import GPNumberInput from './GPNumberInput.vue'

const store = useSuperCombatStore()
</script>

<style lang="less" scoped>
.calc-input {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &--number-input {
    width: 100px;
    margin-bottom: 8px;
  }
}
</style>
