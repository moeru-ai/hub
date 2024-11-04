import { defineCharacterCardMCM, md } from '@moeru-ai/character-card-builder'

import { about } from './about'
import { appearance } from './appearance'
import { relationships } from './relationships'
import { traits } from './traits'

/**
 * Basically SFW.
 *
 * Ref:
 * - {@link https://en.wikipedia.org/wiki/List_of_Touhou_Project_characters#Kaguya_Houraisan}
 * - {@link https://en.touhouwiki.net/wiki/Kaguya_Houraisan}
 */
export const neet_kaguya = defineCharacterCardMCM({
  alternate_greetings: [],
  first_mes: '',
  name: 'Kaguya',
  rawDescription: md.content(
    ...about,
    ...appearance,
    ...relationships,
    ...traits,
  ),
  version: '0.0',
})
