import type { Data } from './data'

export interface CharacterCard {
  data: Data
  spec: 'chara_card_v3'
  spec_version: '3.0'
}

export type { Asset, Assets } from './assets'
export type { CharacterBook, CharacterBookEntry } from './character_book'
export type { Data, DataV2, DataV3 } from './data'
export type { Extensions } from './extensions'
