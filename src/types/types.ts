export interface GEPriceStats {
  high: number
  highTime: number
  low: number
  lowTime: number
}

export interface OsrsBoxItem {
  id: number // 0
  name: string // 'Dwarf remains'
  last_updated: string // '2023-10-15'
  incomplete: boolean
  members: boolean
  tradeable: boolean
  tradeable_on_ge: boolean
  stackable: boolean
  stacked: number | null // 2
  noted: boolean
  noteable: boolean
  linked_id_item: number | null
  linked_id_noted: number | null
  linked_id_placeholder: number | null // 17851
  placeholder: boolean
  equipable: boolean
  equipable_by_player: boolean
  equipable_weapon: boolean
  cost: number | null // 1
  lowalch: number | null // 0
  highalch: number | null // 0
  weight: number | null // 16
  buy_limit: number | null
  quest_item: boolean
  release_date: string // '2003-05-27'
  duplicate: boolean
  examine: string // 'The body of a Dwarf savaged by Goblins.'
  icon: string // 'iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAACPElEQVR4Xs2XW0sCQRTHO0/RY/QQFUE99BBEVEQkRQQRUQkWEhWViYh0FxERu4iIFF3o+hAFic/hdzxxZpxmZ8Yu5uzaHwZ2dtY9v3OZ2WNTk2cC1O80QATBRzK5U7lumABLpSe8v8/jzXUW4/EoAxrq6XEDSnqur0gBA3l8LGChkMbDwwj6/bM//KZmcYhcLomp1B4zUh2MR0ek6fw8g9HoBu7ubNuMEmA2m2AvjMW2MBRaQZ9vlM3T6QMNCvD2NucwDri5GWSRsgp0ehLHyckxR1T4EKA6FBmWxvm6eq8uAR5njrSXAkudMNbS0qxA6YYtwpBkanSvBQjVlpk+V6VGh4wXiw8OSMB8PuU4czwAU0POo0NFTteUUifM8/OlN1BS3DDtHieIiJYodot18514zcjUyHQKIDp75LrrMiHMSABeXZ59nj/qmjWpO8uE0AV4cXHiFhT3mIr1/b3IdtTvjLgCJc+hRCLGhijkn6NEUlOsr9YoYF/tYHAROzraK17yMTI8+GuvLcGQACORdRwY6Ne8BJyenqghSlbEUzQ1NV4l5ICBwJz3QMvL81Vg+Bq1FR4BOQ+0ajD8vvhsmGtWBfj6cs2aMAH2tcGvYOuS3DU0qBFbW11izVhfX6/R5+jPW4ehZpwOLup9aU41Qzuqra1VMSp2VrlcwoWFGfaMCWtFurfq3Amzvxdmkevu6jSe0d9al1TD5lwYF2eRCeupeF2Fw6uNBhECfHu7s/2/ql65WC9/1b+C8Uof5wvhG5Ohd9UAAAAASUVORK5CYII='
  wiki_name: string // 'Dwarf remains'
  wiki_url: string // 'https://oldschool.runescape.wiki/w/Dwarf_remains'
  equipment: Equipment | null
  weapon: Weapon | null
}

interface Equipment {
  attack_stab: number //0
  attack_slash: number //132
  attack_crush: number //80
  attack_magic: number //0
  attack_ranged: number //0
  defence_stab: number //0
  defence_slash: number //0
  defence_crush: number //0
  defence_magic: number //0
  defence_ranged: number //0
  melee_strength: number //132
  ranged_strength: number //0
  magic_damage: number //0
  prayer: number //8
  slot: string //'2h'
  requirements: LevelRequirements | null
}

interface LevelRequirements {
  attack?: number // 75
  strength?: number // 75
  defence?: number // 75
}

interface Weapon {
  attack_speed: number // 6
  weapon_type: string // '2h_sword'
  stances: Stances[]
}

interface Stances {
  combat_style: string // 'chop'
  attack_type: string // 'slash'
  attack_style: string // 'accurate'
  experience: string // 'attack'
  boosts: null // ?
}
