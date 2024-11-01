import type { CharacterCard as CC, CharacterCardMCM as MCMData } from '../types'

import { defineCharacterCard } from './define'
import { content, h } from './markdown'

export const defineCharacterCardMCM = (data: MCMData): CC => defineCharacterCard({
  character_version: data.version,
  description: content(
    h(1, data.name),
  ),
  name: data.name,
})

// TODO: overrideCharacterCardMCM
