import type { CharacterCard, CharacterCardData } from './types'

export type CharacterCardMerger<T extends CharacterCardData = CharacterCardData> = (override: Partial<T>, defaults: T) => T

const defaultData = {
  name: '',
  description: '',
  personality: '',
  scenario: '',
  first_mes: '',
  mes_example: '',
  extensions: {},
  creator_notes: '',
  system_prompt: '',
  post_history_instructions: '',
  alternate_greetings: [],
  tags: [],
  creator: '',
  character_version: '',
  character_book: undefined,
} satisfies CharacterCardData

const defaultMerger: CharacterCardMerger = (override, defaults) => ({
  ...defaults,
  ...override,
})

export const defineCharacterCard = (data: Partial<CharacterCardData>, merge: CharacterCardMerger = defaultMerger): CharacterCard => ({
  spec: 'chara_card_v2',
  spec_version: '2.0',
  data: merge(data, defaultData)
})

export const overrideCharacterCard = (override: Partial<CharacterCardData>, defaults: CharacterCard, merge: CharacterCardMerger = defaultMerger): CharacterCard =>
  defineCharacterCard(merge(override, defaults.data))

