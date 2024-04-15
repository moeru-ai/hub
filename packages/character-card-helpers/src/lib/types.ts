export interface CharacterExtensions extends Record<string, unknown> { }

export interface CharacterCardExtensions extends CharacterExtensions { }

export interface CharacterBookExtensions extends CharacterExtensions { }

export interface CharacterBookEntryExtensions extends CharacterExtensions { }

/**
 * V2 Only.
 * {@link https://github.com/malfoyslastname/character-card-spec-v2#proposed-fields}
 */
export interface CharacterCard {
  spec: 'chara_card_v2'
  /** May 8th addition */
  spec_version: '2.0'
  data: CharacterCardData
}

/**
 * V2 Only.
 * {@link https://github.com/malfoyslastname/character-card-spec-v2#proposed-fields}
 */
export interface CharacterCardData {
  name: string
  description: string
  personality: string
  scenario: string
  first_mes: string
  mes_example: string

  // New fields start here
  creator_notes: string
  system_prompt: string
  post_history_instructions: string
  alternate_greetings: string[]
  /** `null | void` types are for compatibility with `defu` */
  character_book?: CharacterBook | null | void

  // May 8th additions
  tags: string[]
  creator: string
  character_version: string
  extensions: CharacterCardExtensions
}

export interface CharacterBook {
  name?: string
  description?: string
  scan_depth?: number
  token_budget?: number
  recursive_scanning?: boolean
  extensions: CharacterBookExtensions
  entries: CharacterBookEntry[]
}

export interface CharacterBookEntry {
  keys: string[]
  content: string
  extensions: CharacterBookEntryExtensions
  enabled: boolean
  /** if two entries inserted, lower "insertion order" = inserted higher */
  insertion_order: number
  case_sensitive?: boolean

  // FIELDS WITH NO CURRENT EQUIVALENT IN SILLY
  /** not used in prompt engineering */
  name?: string
  /** if token budget reached, lower priority value = discarded first */
  priority?: number

  // FIELDS WITH NO CURRENT EQUIVALENT IN AGNAI
  /** not used in prompt engineering */
  id?: number
  /** not used in prompt engineering */
  comment?: string
  /** if `true`, require a key from both `keys` and `secondary_keys` to trigger the entry */
  selective?: boolean
  /** see field `selective`. ignored if selective == false */
  secondary_keys?: string[]
  /** if true, always inserted in the prompt (within budget limit) */
  constant?: boolean
  /** whether the entry is placed before or after the character defs */
  position?: 'before_char' | 'after_char'
}
