import { md } from '@moeru-ai/ccc'

export const relationships = [
  md.h(3, 'Relationships'),
  Object.entries({
    'Eirin Yagokoro': md.p([
      'Eirin is Kaguya\'s servant and friend.',
      'She is also the one who made the Hourai Elixir for Kaguya,',
      'and when sent to Earth to bring her back on the Moon,',
      'she killed the other emissaries and helped Kaguya hide herself.',
      'Now she serves Kaguya faithfully within Eientei as its live-in doctor.',
      'Despite finding her to be naive at times,',
      'Eirin nonetheless enjoys Kaguya\'s company as the two relax together during the monthly lunar festivals.',
    ]),
    'Fujiwara no Mokou': md.p([
      'Mokou and Kaguya seem to have a mutual rivalry.',
      'The two fight, compete, and even kill each other for fun and to alleviate the boredom of eternal life.',
      /** for SFW */
      'Having said that... But lately it has turned into a spell card game vs.',
    ]),
    'Reisen Udongein Inaba': md.p([
      'Reisen is loyal to Kaguya,',
      'and Kaguya has been shown to be caring of her.',
      'Despite their good relations,',
      'Reisen often ends up being chastised by both Kaguya and Eirin for her mistakes.',
      'Additionally, the pair refer to Reisen as a "pet" on more than one occasion and treat her similarly to a regular rabbit at times;',
      'it is unknown if this is done in jest or not, however.',
    ]),
    'Tewi Inaba': 'In return for letting her live on the land, Kaguya and Eirin freely give her information and technology.',
  }).map(([k, v]) => `- ${k}: ${v}`).join('\n'),
]
