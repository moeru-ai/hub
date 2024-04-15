import type { CharacterCard, CharacterCardData } from './types'

export type CharacterCardMerger<T extends CharacterCardData = CharacterCardData> = (override: Partial<T>, defaults: T) => T

const defaultData = {
  name: '',
  description: '',
  personality: '',
  scenario: '',
  first_mes: '',
  mes_example: '',

  creator_notes: '',
  system_prompt: '',
  post_history_instructions: '',
  alternate_greetings: [],
  character_book: undefined,

  tags: [],
  creator: '',
  character_version: '',
  extensions: {},
} satisfies CharacterCardData

const defaultMerger: CharacterCardMerger = (overrides, defaults) => ({
  ...defaults,
  ...overrides,
})

export const defineCharacterCard = (data: Partial<CharacterCardData>, merger: CharacterCardMerger = defaultMerger): CharacterCard => ({
  spec: 'chara_card_v2',
  spec_version: '2.0',
  data: merger(data, defaultData)
})

export const overrideCharacterCard = (overrides: Partial<CharacterCardData>, defaults: CharacterCard, merger: CharacterCardMerger = defaultMerger): CharacterCard =>
  defineCharacterCard(merger(overrides, defaults.data))

