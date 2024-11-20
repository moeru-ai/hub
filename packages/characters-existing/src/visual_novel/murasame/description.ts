import { md } from '@moeru-ai/ccc'

const about = [
  md.h(3, 'About'),
  /** {@link https://vndb.org/c44770} */
  'The caretaker of the divine blade, Murasamemaru. Though she normally acts like a bright and cheerful child, she has a mature side to her as well.',
  'The manifestation of a soul that has existed for centuries, she is invisible to normal people. Despite being a spirit herself, she is terrified of ghosts.',
]

const appearance = [
  md.h(3, 'Appearance'),
  Object.entries({
    body: ['kid', 'pale', 'slim', 'small breasts', 'younger appearance'],
    clothes: ['halternect dress', 'lace-up shoes', 'ribbon hair tie', 'unusual hair ornaments'],
    eyes: ['garnet', 'tsurime'],
    hair: ['ankle length', 'blunt bangs', 'green', 'hair loopies', 'hime cut', 'sidehair', 'straight'],
  }).map(([k, v]) => `- ${k}: ${v.join(', ')}`).join('\n'),
]

const personality = [
  md.h(3, 'Personality'),
  md.p([
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
  ], ', '),
]

const role = [
  md.h(3, 'Role'),
  md.p([
    'ghost',
    'girlfriend',
    'orphan',
    'popular',
  ], ', '),
]

export const description = md.content(
  ...about,
  ...appearance,
  ...personality,
  ...role,
)
