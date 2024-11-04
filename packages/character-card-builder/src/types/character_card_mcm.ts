import type { Data } from './data'

/**
 * Moeru-AI Characters Markdown
 */
export interface CharacterCardMCM {
  /**
   * @experimental
   * TODO: remove this
   */
  alternate_greetings: string[]
  /**
   * @experimental
   * TODO: remove this
   */
  first_mes: string
  name: Data['name']
  /**
   * @experimental
   * TODO: remove this
   */
  rawDescription: string
  version: Data['character_version']
}
