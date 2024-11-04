import type { CharacterCard as CC, CharacterCardMCM as MCMData } from '../types'

import { defineCharacterCard } from './define'
import { content, h } from './markdown'

export const defineCharacterCardMCM = (data: MCMData): CC => defineCharacterCard({
  alternate_greetings: data.alternate_greetings,
  character_version: data.version,
  description: content(
    h(1, data.name),
    data.rawDescription,
  ),
  first_mes: data.first_mes,
  name: data.name,
})

// TODO: overrideCharacterCardMCM
