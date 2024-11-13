import type { Data } from '../export/types'

/**
 * Moeru-AI Character Card Markdown
 */
export interface Card {
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

export const defineCard = (card: Card) => card
