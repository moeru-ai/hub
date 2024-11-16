import { defineCard } from '@moeru-ai/ccc'

import { description } from './description'
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
export const murasame = defineCard({
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
  name: 'Miku Hatsune',
  nickname: 'Miku',
  notes: 'Hatsune Miku from "Blue Archive".',
  version: '0.1',
})
