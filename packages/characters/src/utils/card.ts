import type { V2 } from 'character-card-utils'

import { defu } from 'defu'

export type CardData = Partial<V2['data']> & {
  /** compatible with chub.ai */
  avatar?: string
  // extensions?: {} // TODO
}

export type Card = Omit<V2, 'data'> & { data: CardData }

const defaults = {
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
  creator: 'moeru-ai',
  character_version: '0.1',
  character_book: undefined,
} satisfies CardData

export const defineCharacterCard = (data: CardData): Card => ({
  spec: 'chara_card_v2',
  spec_version: '2.0',
  data: defu(data, defaults)
})

export const overrideCharacterCard = (override: CardData, defaults: Card): Card => defineCharacterCard(defu(override, defaults.data))

export const stringifyCharacterCard = (card: Card): string => JSON.stringify({
  ...card,
  data: Object.fromEntries(
    Object.entries(card.data).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  )
}, null, 2)
