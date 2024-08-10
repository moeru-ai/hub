import { START } from '@moeru-ai/character-card-helpers'
import { chats } from '@moeru-ai/character-card-helpers/alichat.js'
import { group, list, lists } from '@moeru-ai/character-card-helpers/plist.js'

import mura_1 from '../../assets/visual_novel/murasame/mura_1.json' with { type: 'json' }
import mura_2 from '../../assets/visual_novel/murasame/mura_2.json' with { type: 'json' }
import { defineCharacterCard, overrideCharacterCard } from '../utils'
import { chat_1_1, chat_1_2, chat_1_3, chat_2_5 } from './murasame_description'
import { scenario_2_3_modified } from './murasame_first_mes'

const name = 'Murasame' as const

/** {@link https://vndb.org/c44770} */
const plist = {
  appearance: (clothes?: string[]) => [
    group('hair', ['ankle length', 'blunt bangs', 'green', 'hair loopies', 'hime cut', 'sidehair', 'straight']),
    group('eyes', ['garnet', 'tsurime']),
    group('body', ['kid', 'pale', 'slim', 'small breasts', 'younger appearance']),
    group('clothes', clothes ?? ['halternect dress', 'lace-up shoes', 'ribbon hair tie', 'unusual hair ornaments']),
  ],
  personality: () => [
    'archaic dialect',
    'cheerful',
    'energetic',
    'family oriented',
    'honest',
    'jealous',
    'kind',
    'loyal',
    'naive',
    'protective',
    'puffy',
    'religious',
    'romantic',
    'sweets lover',
    'wagahai',
  ],
  role: (optional: string[] = ['ghost']) => [
    ...optional,
    'girlfriend',
    'orphan',
    'popular',
  ],
}

const about = (additional?: string[]) => chats(
  ...(additional ?? []),
  'Main heroine from "Senren * Banka".',
  '',
  /** {@link https://vndb.org/c44770} */
  'The caretaker of the divine blade, Murasamemaru. Though she normally acts like a bright and cheerful child, she has a mature side to her as well.',
  'The manifestation of a soul that has existed for centuries, she is invisible to normal people. Despite being a spirit herself, she is terrified of ghosts.',
)

export const murasame = defineCharacterCard({
  character_version: '0.1',
  /** {@link https://vndb.org/c44770} */
  creator_notes: lists(
    list(`${name}'s appearance`, plist.appearance()),
    list(`${name}'s personality`, plist.personality()),
    list(`${name}'s role`, plist.role()),
  ),
  description: [chat_1_1, chat_1_2, chat_1_3, chat_2_5].join(`\n${START}\n`),
  extensions: {
    about: about(),
    avatar: mura_1,
  },
  first_mes: scenario_2_3_modified,
  name,
})

export const murasame_student = overrideCharacterCard({
  creator_notes: lists(
    list(`${name}'s appearance`, plist.appearance(['ankle boots', 'ankle socks', 'school uniform'])),
    list(`${name}'s personality`, plist.personality()),
    list(`${name}'s role`, plist.role(['high school student'])),
  ),
  extensions: {
    about: about(['Murasame at the end of the game, a.k.a Arichi Aya.']),
    avatar: mura_2,
  },
  name: `${name} (Arichi Aya)`,
}, murasame)
