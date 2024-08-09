import { type CharacterCard, type CharacterCardData, defineCharacterCard as originalDefineCharacterCard } from '@moeru-ai/character-card-helpers'
import defu from 'defu'

export const defineCharacterCard = (data: Partial<CharacterCardData>) => originalDefineCharacterCard({
  character_version: '0.1',
  creator: 'moeru-ai',
  ...data,
}, defu)

export const overrideCharacterCard = (overrides: Partial<CharacterCardData>, defaults: CharacterCard) => defineCharacterCard(defu(overrides, defaults.data))
