import type { CharacterCard as CC, Data, DataV2, DataV3 } from '../types'

export type DataMerger = (override: Partial<Data>, defaults?: Data) => Data

const defaultDataV2 = {
  alternate_greetings: [],
  //   character_book: undefined,
  character_version: '',
  creator: '',
  creator_notes: '',
  description: '',
  extensions: {},
  first_mes: '',
  mes_example: '',
  name: '',
  personality: '',
  post_history_instructions: '',
  scenario: '',
  system_prompt: '',
  tags: [],
} satisfies DataV2

const defaultDataV3 = {
  group_only_greetings: [],
} satisfies DataV3

const defaultMerger: DataMerger = (overrides, defaults = {
  ...defaultDataV2,
  ...defaultDataV3,
}) => ({
  ...defaults,
  ...overrides,
})

export const defineCharacterCard = (data: Partial<Data>, merger: DataMerger = defaultMerger): CC => ({
  data: merger(data),
  spec: 'chara_card_v3',
  spec_version: '3.0',
})

export const overrideCharacterCard = (overrides: Partial<Data>, defaults: CC, merger: DataMerger = defaultMerger): CC =>
  defineCharacterCard(merger(overrides, defaults.data))
