import { defineCharacterCard as origianlDefineCharacterCard, overrideCharacterCard as originalOverrideCharacterCard, type CharacterCardMerger, type CharacterCardData, type CharacterCard } from '@moeru-ai/character-card-helpers'
import defu from 'defu'

const merge: CharacterCardMerger = (overrides, defaults) => defu(overrides, defaults)

export const defineCharacterCard = (data: Partial<CharacterCardData>) => origianlDefineCharacterCard(Object.fromEntries(
  new Set(Object.entries({
    creator: 'moeru-ai',
    character_version: '0.1',
    ...data,
  })
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)))
), merge)

export const overrideCharacterCard = (overrides: Partial<CharacterCardData>, defaults: CharacterCard) => originalOverrideCharacterCard(overrides, defaults, merge)
