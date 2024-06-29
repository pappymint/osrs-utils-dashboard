<template>
  <h3>Rune items high-alch profit calculator</h3>

  <div id="stats-grid">
    <div class="bar-input">
      <img src="https://oldschool.runescape.wiki/images/Runite_bar.png?068bd" alt="runite bar" />
      <div class="input-wrapper">
        <label for="runeBarCount" class="font-bold block mb-2">Number of rune bars</label>
        <InputNumber v-model="store.runeBarCount" />
      </div>
    </div>

    <div class="bar-input">
      <img src="https://oldschool.runescape.wiki/images/Rune_2h_sword.png?d9213" alt="2h sword" />
      <div class="input-wrapper">
        <Fieldset legend="You can make">
          {{ smithableNumberOfItems(3) }}
          <p class="small-text">2h swords, platelegs or plateskirts</p>
        </Fieldset>
      </div>
    </div>

    <div class="bar-input">
      <img
        src="https://oldschool.runescape.wiki/images/thumb/Grand_Exchange_logo.png/150px-Grand_Exchange_logo.png?88cff"
        alt="ge icon"
      />
      <div class="input-wrapper">
        <Fieldset legend="GE Price per runite bar">
          {{ getItemPrice(runiteBarGEStats) }}
        </Fieldset>
      </div>
    </div>

    <div class="bar-input">
      <img
        src="https://oldschool.runescape.wiki/images/Nature_rune.png?ed6d0"
        alt="nature rune icon"
      />
      <div class="input-wrapper">
        <Fieldset legend="GE Price per nature rune">
          {{ getItemPrice(natureRuneGEStats) }}
        </Fieldset>
      </div>
    </div>

    <div class="bar-input">
      <img src="https://oldschool.runescape.wiki/images/Coins_10000.png?7fa38" alt="osrs gp icon" />
      <div class="input-wrapper">
        <Fieldset legend="Total cost to create item">
          {{ formatGPString(costPricePerItem()) }}
        </Fieldset>
      </div>
    </div>

    <div class="bar-input">
      <img
        src="https://oldschool.runescape.wiki/images/High_Level_Alchemy.png?94664"
        alt="high alch icon"
      />
      <div class="input-wrapper">
        <Fieldset legend="High alch value">
          {{ formatGPString(RUNE_2H_HA_VALUE) }}
        </Fieldset>
      </div>
    </div>

    <div class="bar-input">
      <img src="https://oldschool.runescape.wiki/images/Coins_10000.png?7fa38" alt="coins icon" />
      <div class="input-wrapper">
        <Fieldset legend="Profit per alch">
          {{ formatGPString(profitPerAlch()) }}
        </Fieldset>
      </div>
    </div>

    <div class="bar-input">
      <img src="https://oldschool.runescape.wiki/images/Coins_10000.png?7fa38" alt="coins icon" />
      <div class="input-wrapper">
        <Fieldset legend="TOTAL PROFIT">
          {{ formatGPString(profitPerAlch() * Math.floor(store.runeBarCount / 3)) }}
        </Fieldset>
      </div>
    </div>

    <div class="bar-input">
      <img src="https://oldschool.runescape.wiki/images/Coins_10000.png?7fa38" alt="coins icon" />
      <div class="input-wrapper">
        <Fieldset legend="Sell on W308">
          {{ formatGPString(profitSellingOnW308() * Math.floor(store.runeBarCount / 3)) }}
        </Fieldset>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, type Ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Fieldset from 'primevue/fieldset'
import { useRuneAlchCalcStore } from '@/stores/runeAlchCalc'
import { getGEStatsForItem } from '@/api/api'
import type { GEPriceStats } from '@/types/types'
import { NATURE_RUNE, RUNITE_BAR } from '@/utils/itemIDs'

const RUNE_2H_HA_VALUE = 38400
const W308_SELL_PRICE = 38000

const store = useRuneAlchCalcStore()

const runiteBarGEStats: Ref<GEPriceStats | undefined> = ref()
const natureRuneGEStats: Ref<GEPriceStats | undefined> = ref()

onBeforeMount(async () => {
  await getGEStatsForItem(RUNITE_BAR).then((stats) => {
    runiteBarGEStats.value = stats
  })
  await getGEStatsForItem(NATURE_RUNE).then((stats) => {
    natureRuneGEStats.value = stats
  })
})

const formatGPString = (gp: number) => {
  return gp.toLocaleString() + ' gp'
}

const smithableNumberOfItems = (barsNeeded: number) => {
  return Math.floor(store.runeBarCount / barsNeeded).toLocaleString()
}

const getItemPrice = (geItem: GEPriceStats | undefined) => {
  if (geItem) {
    return formatGPString(geItem.high > 0 ? geItem.high : geItem.low)
  }
  return '-'
}

const costPricePerItem = (): number => {
  if (runiteBarGEStats.value?.high && natureRuneGEStats.value?.high) {
    return runiteBarGEStats.value?.high * 3 + natureRuneGEStats.value?.high
  }
  return 0
}

const profitPerAlch = () => {
  return RUNE_2H_HA_VALUE - costPricePerItem()
}

const profitSellingOnW308 = () => {
  return W308_SELL_PRICE - costPricePerItem()
}
</script>

<style lang="less" scoped>
#stats-grid {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}

.bar-input {
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
  img {
    width: 40px;
    height: fit-content;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 300px;

    .bold-text {
      font-weight: 600;
    }
    .small-text {
      font-size: 10px;
      margin: 4px 0 0 0;
    }
  }
}
</style>
