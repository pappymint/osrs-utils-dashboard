import type { OsrsBoxItem } from '@/types/types'
import axios from 'axios'

export const getGEStatsForItem = async (itemId: number) => {
  let itemData = undefined
  await axios
    .get('https://prices.runescape.wiki/api/v1/osrs/latest', {
      params: {
        id: itemId ?? 0
      },
      headers: {
        'User-Agent': 'Super combat price calculator - email: papaya.dev@protonmail.com'
      }
    })
    .then((response) => {
      itemData = response.data.data[itemId]
    })

  return itemData
}

export const osrsBoxItemsAndIds = async () => {
  let data: OsrsBoxItem[] = []
  await axios
    .get(
      'https://raw.githubusercontent.com/0xNeffarion/osrsreboxed-db/master/docs/items-complete.json'
    )
    .then((response) => {
      data = response.data
    })
  return data
}
