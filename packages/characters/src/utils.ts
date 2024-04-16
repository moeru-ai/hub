import { defineCharacterCard as originalDefineCharacterCard, type CharacterCardData, type CharacterCard } from '@moeru-ai/character-card-helpers'
import defu from 'defu'

export const defineCharacterCard = (data: Partial<CharacterCardData>) => originalDefineCharacterCard({
  creator: 'moeru-ai',
  character_version: '0.1',
  ...data,
}, defu)

export const overrideCharacterCard = (overrides: Partial<CharacterCardData>, defaults: CharacterCard) => defineCharacterCard(defu(overrides, defaults.data))
