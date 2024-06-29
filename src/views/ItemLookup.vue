<template>
  <p v-if="loading">Loading</p>
  <DataTable
    v-else
    :value="itemsData"
    :paginator="true"
    :rows="15"
    :rowsPerPageOptions="[5, 15, 50, 100]"
    tableStyle="min-width: 50rem"
  >
    <Column field="id" header="ID"></Column>
    <Column header="Icon">
      <template #body="slotProps">
        <img :src="`data:image/png;base64,${slotProps.data.icon}`" :alt="slotProps.data.icon" />
      </template>
    </Column>
    <Column field="name" header="Name"></Column>
    <Column header="Members Item?">
      <template #body="slotProps">
        <img :src="getMembersStarIcon(slotProps.data.members)" />
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { osrsBoxItemsAndIds } from '@/api/api'
import { type OsrsBoxItem } from '@/types/types'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const itemsData = ref([{}])
const loading = ref(true)

onBeforeMount(async () => {
  loading.value = true
  await prepareOsrsBoxDataForTable()
  loading.value = false
})

const prepareOsrsBoxDataForTable = async () => {
  const osrsBoxData = await osrsBoxItemsAndIds()
  itemsData.value = []
  console.log(osrsBoxData[0])
  Object.values(osrsBoxData).forEach((boxItem: OsrsBoxItem) => {
    itemsData.value.push({
      key: boxItem.id.toString(),
      id: boxItem.id,
      icon: boxItem.icon,
      name: boxItem.name,
      members: boxItem.members
    })
  })
}

const getMembersStarIcon = (isMembersItem: boolean): string => {
  return `https://oldschool.runescape.wiki/images/${isMembersItem ? 'Member_icon.png?1de0c' : 'Free-to-play_icon.png?628ce'}`
}
</script>

<style lang="less" scoped></style>
