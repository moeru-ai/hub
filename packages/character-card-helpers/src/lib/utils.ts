import type { CharacterCard, CharacterCardData } from './types'

export type CharacterCardMerger<T extends CharacterCardData = CharacterCardData> = (override: Partial<T>, defaults: T) => T

const defaultData = {
  alternate_greetings: [],
  character_book: undefined,
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
} satisfies CharacterCardData

const defaultMerger: CharacterCardMerger = (overrides, defaults) => ({
  ...defaults,
  ...overrides,
})

export const defineCharacterCard = (data: Partial<CharacterCardData>, merger: CharacterCardMerger = defaultMerger): CharacterCard => ({
  data: merger(data, defaultData),
  spec: 'chara_card_v2',
  spec_version: '2.0',
})

export const overrideCharacterCard = (overrides: Partial<CharacterCardData>, defaults: CharacterCard, merger: CharacterCardMerger = defaultMerger): CharacterCard =>
  defineCharacterCard(merger(overrides, defaults.data))
