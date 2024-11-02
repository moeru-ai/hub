import type { Data } from './data'

/**
 * Moeru-AI Characters Markdown
 */
export interface CharacterCardMCM {
  name: Data['name']
  /**
   * @experimental
   * TODO: remove this
   */
  rawDescription: string
  version: Data['character_version']
}
