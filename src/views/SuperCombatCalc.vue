<template>
  <h3>Super combat calc</h3>

  <div class="inputs-container">
    <div class="inputs-container--form">
      <img
        src="https://oldschool.runescape.wiki/images/Super_strength%284%29.png?fa231"
        alt="Super str (4)"
        class="icon-img"
      />
      <div class="calc-input">
        <label for="superStrCost" class="font-bold block mb-2">Super strength (4)</label>
        <GPNumberInput
          v-model="store.superStrCost"
          inputId="superStrCost"
          class="calc-input--number-input"
        />
      </div>
      <div class="ge-stats">
        <p>GE prices</p>
        <p class="text-sm">High: {{ store.gePriceSuperStr?.high.toLocaleString() }} gp</p>
        <p class="text-sm">Low: {{ store.gePriceSuperStr?.low.toLocaleString() }} gp</p>
      </div>

      <img
        src="https://oldschool.runescape.wiki/images/Super_attack%284%29.png?ff13c"
        alt="Super att (4)"
        class="icon-img"
      />
      <div class="calc-input">
        <label for="superAttCost" class="font-bold block mb-2">Super attack (4)</label>
        <GPNumberInput
          v-model="store.superAttCost"
          inputId="superAttCost"
          class="calc-input--number-input"
        />
      </div>
      <div class="ge-stats">
        <p>GE prices</p>
        <p class="text-sm">High: {{ store.gePriceSuperAtt?.high.toLocaleString() }} gp</p>
        <p class="text-sm">Low: {{ store.gePriceSuperAtt?.low.toLocaleString() }} gp</p>
      </div>

      <img
        src="https://oldschool.runescape.wiki/images/Super_defence%284%29.png?ff13c"
        alt="Super def (4)"
        class="icon-img"
      />
      <div class="calc-input">
        <label for="superDefCost" class="font-bold block mb-2">Super defence (4)</label>
        <GPNumberInput
          v-model="store.superDefCost"
          inputId="superDefCost"
          class="calc-input--number-input"
        />
      </div>
      <div class="ge-stats">
        <p>GE prices</p>
        <p class="text-sm">High: {{ store.gePriceSuperDef?.high.toLocaleString() }} gp</p>
        <p class="text-sm">Low: {{ store.gePriceSuperDef?.low.toLocaleString() }} gp</p>
      </div>

      <img
        src="https://oldschool.runescape.wiki/images/Torstol.png?632be"
        alt="Torstol"
        class="icon-img"
      />
      <div class="calc-input">
        <label for="torstolCost" class="font-bold block mb-2">Torstol</label>
        <GPNumberInput
          v-model="store.torstolCost"
          inputId="torstolCost"
          class="calc-input--number-input"
        />
      </div>
      <div class="ge-stats">
        <p>GE prices</p>
        <p class="text-sm">High: {{ store.gePriceTorstol?.high.toLocaleString() }} gp</p>
        <p class="text-sm">Low: {{ store.gePriceTorstol?.low.toLocaleString() }} gp</p>
      </div>

      <img
        src="https://oldschool.runescape.wiki/images/Super_combat_potion%284%29.png?ff13c"
        alt="Super combat"
        class="icon-img"
      />
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
      <div class="ge-stats">
        <p>GE prices</p>
        <p class="text-sm">High: {{ store.gePriceSuperCombat?.high.toLocaleString() }} gp</p>
        <p class="text-sm">Low: {{ store.gePriceSuperCombat?.low.toLocaleString() }} gp</p>
      </div>
    </div>
    <div class="reset-button">
      <Button @click="store.resetAllInputs">Reset custom prices</Button>
    </div>
  </div>

  <hr />

  <div class="stats-set">
    <Fieldset legend="Total ingredients cost">
      {{ store.totalCostOfPot.toLocaleString() }} gp
    </Fieldset>
    <Fieldset legend="GE price for Super Combat Potion (4) after tax">
      {{ store.salePriceMinusTax.toLocaleString() }} gp
    </Fieldset>
    <Fieldset legend="Total profit">
      <span :class="['profit-value', { negative: store.totalProfit < 1 }]"
        >{{ store.totalProfit }} gp</span
      >
    </Fieldset>
    <Fieldset legend="GE pricing profit"
      ><span
        :class="[
          'profit-value',
          { negative: typeof store.gePriceProfit === 'number' && store.gePriceProfit < 1 }
        ]"
        >{{ store.gePriceProfit }} gp</span
      ></Fieldset
    >
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useSuperCombatStore } from '@/stores/superCombat'
import Button from 'primevue/button'
import GPNumberInput from '@/components/GPNumberInput.vue'
import Fieldset from 'primevue/fieldset'

const store = useSuperCombatStore()

onBeforeMount(() => {
  store.fetchGePrices()
})
</script>

<style lang="less" scoped>
.inputs-container {
  &--form {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 24px;
  }
}

.stats-set {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 24px;
}

.reset-button {
  text-align: right;
  padding-top: 12px;
}

.icon-img {
  width: 40px;
}

.splitter-panel {
  padding: 12px;
}

.calc-input {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  &--number-input {
    max-width: 60px;
    margin-bottom: 8px;
  }
}

.profit-value {
  color: green;
  &.negative {
    color: red;
  }
}

.text-sm {
  font-size: 12px;
}

.ge-stats {
  p {
    margin: 0 0 8px 0;
  }
}
</style>
