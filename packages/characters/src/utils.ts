import { defineCharacterCard as originalDefineCharacterCard, type CharacterCardMerger, type CharacterCardData, type CharacterCard } from '@moeru-ai/character-card-helpers'
import defu from 'defu'

const merge: CharacterCardMerger = (overrides, defaults) => defu(overrides, defaults)

export const defineCharacterCard = (data: Partial<CharacterCardData>) => originalDefineCharacterCard({
  creator: 'moeru-ai',
  character_version: '0.1',
  ...data,
}, merge)

export const overrideCharacterCard = (overrides: Partial<CharacterCardData>, defaults: CharacterCard) => defineCharacterCard(merge(overrides, defaults.data))
