<template>
  <h1>Minty OSRS tools</h1>
  <MegaMenu id="mega-menu-nav" :model="navItems" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MegaMenu from 'primevue/megamenu'
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = ref([
  {
    icon: 'pi pi-home',
    command: () => {
      router.push({ name: 'home' })
    }
  },
  {
    label: 'Calculators',
    icon: 'pi pi-calculator',
    items: [
      [
        {
          label: 'Money Making Calculators',
          icon: 'pi pi-money-bill',
          items: [
            {
              label: 'Super combat potions',
              command: () => {
                router.push({ name: 'superCombatCalc' })
              }
            }
          ]
        }
      ]
    ]
  }
])
</script>

<style lang="less" scoped>
#mega-menu-nav {
  margin-bottom: 48px;
}
</style>
