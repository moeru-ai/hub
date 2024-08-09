export interface CharacterExtensions extends Record<string, unknown> { }

export interface CharacterCardExtensions extends CharacterExtensions { }

export interface CharacterBookExtensions extends CharacterExtensions { }

export interface CharacterBookEntryExtensions extends CharacterExtensions { }

/**
 * V2 Only.
 * {@link https://github.com/malfoyslastname/character-card-spec-v2#proposed-fields}
 */
export interface CharacterCard {
  data: CharacterCardData
  spec: 'chara_card_v2'
  /** May 8th addition */
  spec_version: '2.0'
}

/**
 * V2 Only.
 * {@link https://github.com/malfoyslastname/character-card-spec-v2#proposed-fields}
 */
export interface CharacterCardData {
  alternate_greetings: string[]
  /** `null | void` types are for compatibility with `defu` */
  character_book?: CharacterBook | null | void
  character_version: string
  creator: string
  // New fields start here
  creator_notes: string
  description: string

  extensions: CharacterCardExtensions
  first_mes: string
  mes_example: string
  name: string
  personality: string

  post_history_instructions: string
  scenario: string
  system_prompt: string
  // May 8th additions
  tags: string[]
}

export interface CharacterBook {
  description?: string
  entries: CharacterBookEntry[]
  extensions: CharacterBookExtensions
  name?: string
  recursive_scanning?: boolean
  scan_depth?: number
  token_budget?: number
}

export interface CharacterBookEntry {
  case_sensitive?: boolean
  /** not used in prompt engineering */
  comment?: string
  /** if true, always inserted in the prompt (within budget limit) */
  constant?: boolean
  content: string
  enabled: boolean
  extensions: CharacterBookEntryExtensions

  // FIELDS WITH NO CURRENT EQUIVALENT IN SILLY
  /** not used in prompt engineering */
  id?: number
  /** if two entries inserted, lower "insertion order" = inserted higher */
  insertion_order: number

  // FIELDS WITH NO CURRENT EQUIVALENT IN AGNAI
  keys: string[]
  /** not used in prompt engineering */
  name?: string
  /** whether the entry is placed before or after the character defs */
  position?: 'after_char' | 'before_char'
  /** if token budget reached, lower priority value = discarded first */
  priority?: number
  /** see field `selective`. ignored if selective == false */
  secondary_keys?: string[]
  /** if `true`, require a key from both `keys` and `secondary_keys` to trigger the entry */
  selective?: boolean
}
