import { START } from '@moeru-ai/character-card-helpers'
import { chats } from '@moeru-ai/character-card-helpers/alichat.js'
import { group, list, lists } from '@moeru-ai/character-card-helpers/plist.js'

import { defineCharacterCard } from '../utils'
import { virtual_idol_secret, virtual_idol_stage, virtual_idol_troubles } from './hatsune_miku_description'

const name = 'Hatsune Miku' as const

export const hatsune_miku = defineCharacterCard({
  character_version: '0.1',
  creator_notes: lists(
    list(`${name}'s appearance`, [
      group('hair', ['blue', 'cyan', 'long', 'twin-tail']),
      // TODO
    ]),
  ),
  description: chats(
    /** TODO: remove this */
    `The always-cheerful virtual singer who really loves to sing.
Originally a purely electronic existence,
the technology of Kivotos has allowed Miku to obtain a real body and stand in the real world.
As expected of a singer whose music can overcome time and space,
Miku has many secret fans in Kivotos who are eagerly looking forward to the live concert that she's planning to hold in this world.`,
    // START,
    // momotalk_1,
    // START,
    // momotalk_2,
    // START,
    // momotalk_3,
    // START,
    // momotalk_4,
    START,
    virtual_idol_secret,
    START,
    virtual_idol_troubles,
    START,
    virtual_idol_stage,
  ),
  extensions: {
    about: 'Hatsune Miku from "Blue Archive".',
    avatar: new URL('https://static.miraheze.org/bluearchivewiki/9/93/Hatsune_Miku.png').href,
  },
  first_mes: '', // TODO
  name: `${name} (WIP)`,
})
