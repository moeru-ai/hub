import { defineCard } from '@moeru-ai/ccc'

import { description, notes } from './description'
import {
  momotalk_1,
  momotalk_2,
  momotalk_3,
  momotalk_4,
  virtual_idol_resolve,
  virtual_idol_secret,
  virtual_idol_stage,
  virtual_idol_troubles,
} from './mes_example'

/**
 * Miku-chan from "Blue Archive".
 *
 * Ref:
 * - {@link https://bluearchive.wiki/wiki/Hatsune_Miku}
 */
export const hatsune_miku = defineCard({
  description,
  messageExample: [
    momotalk_1,
    virtual_idol_secret,
    momotalk_2,
    virtual_idol_troubles,
    momotalk_3,
    virtual_idol_resolve,
    momotalk_4,
    virtual_idol_stage,
  ],
  metadata: {
    avatar: '/characters/existing/blue_archive/hatsune_miku.png',
  },
  name: 'Miku Hatsune',
  nickname: 'Miku',
  notes: notes.join('\n\n'),
  version: '0.1',
})
