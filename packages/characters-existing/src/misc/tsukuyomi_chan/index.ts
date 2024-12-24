import { chat, defineCard } from '@moeru-ai/ccc'

import { description } from './description'

/**
 * These are unofficial character card of "つくよみちゃん" (Tsukuyomi-chan), the Free Material Character from Japan.
 * Based on "Tsukuyomi-chan Character License".
 *
 * @see {@link https://tyc.rei-yumesaki.net/}
 */
export const tsukuyomi_chan = defineCard({
  description,
  greetings: [chat.msg`Hello, My name is Tsukuyomi-chan. Is there anything I can do to help? I would like to help you in any way I can.`],
  metadata: {
    'license.link': 'https://tyc.rei-yumesaki.net/about/terms/',
    'license.name': 'Tsukuyomi-chan Character License',
  },
  //   messageExample: [],
  name: 'Tsukuyomi-chan',
  notes: [
    'These are unofficial character card of "つくよみちゃん" (Tsukuyomi-chan), the Free Material Character from Japan.',
    'Based on "Tsukuyomi-chan Character License".',
    '■ Tsukuyomi-chan Official Site: https://tyc.rei-yumesaki.net/',

    // 'The Character Card is created using a set of conversation text data that is made available free of charge by the free material character "Tsukuyomi-chan".',
    // '■ つくよみちゃん会話AI育成計画: https://tyc.rei-yumesaki.net/material/kaiwa-ai/',
    // '© Rei Yumesaki',
  ].join('\n\n'),
  version: '0.0',
})