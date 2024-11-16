import { defineCard } from '@moeru-ai/ccc'

import { description } from './description'
import { scenario_2_3_modified } from './greetings'
import { chat_1_1, chat_1_2, chat_1_3, chat_2_5 } from './mes_example'

/**
 * Murasame-chan from "Senren * Banka".
 *
 * Ref:
 * - {@link https://vndb.org/c44770}
 */
export const murasame = defineCard({
  description,
  greetings: [scenario_2_3_modified],
  messageExample: [
    chat_1_1,
    chat_1_2,
    chat_1_3,
    chat_2_5,
  ],
  name: 'Murasame',
  //   nickname: 'Murasame-chan',
  notes: 'Main heroine from "Senren * Banka".',
  version: '0.1',
})
