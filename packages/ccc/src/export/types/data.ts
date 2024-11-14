import type { Assets } from './assets'
import type { CharacterBook } from './character_book'
import type { Extensions } from './extensions'

/** @see {@link https://github.com/kwaroran/character-card-spec-v3/blob/main/SPEC_V3.md#charactercard-object} */
export type Data = DataV2 & DataV3

/** fields & changes from CCV2 */
export interface DataV2 {
  alternate_greetings: string[]
  character_book?: CharacterBook
  character_version: string
  creator: string
  creator_notes: string
  description: string
  extensions: Extensions
  first_mes: string
  mes_example: string
  name: string
  personality: string
  post_history_instructions: string
  scenario: string
  system_prompt: string
  tags: string[]
}

/** new fields in CCV3 */
export interface DataV3 {
  assets?: Assets
  creation_date?: number
  creator_notes_multilingual?: Record<string, string>
  group_only_greetings: string[]
  modification_date?: number
  nickname?: string
  source?: string[]
}
