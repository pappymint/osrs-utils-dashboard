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
