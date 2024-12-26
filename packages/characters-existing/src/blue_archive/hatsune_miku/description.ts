import { md } from '@moeru-ai/ccc'

export const notes = [
  md.p(['The always-cheerful virtual singer who really loves to sing.']),
  md.p([
    'Originally a purely electronic existence,',
    'the technology of Kivotos has allowed Miku to obtain a real body and stand in the real world.',
  ]),
]

const about = [
  md.h(3, 'About'),
  ...notes,
  md.p([
    'As expected of a singer whose music can overcome time and space,',
    'Miku has many secret fans in Kivotos who are eagerly looking forward to the live concert that she\'s planning to hold in this world.',
  ]),
]

const appearance = [
  md.h(3, 'Appearance'),
  Object.entries({
    body: ['pale', 'slim', 'small breasts', 'younger appearance'],
    clothes: ['sailor dress (navy blue and white) (bow and frilled collar, pink / blue cards)', 'white heels with ankle straps'],
    eyes: ['blue'],
    hair: ['blue', 'turquoise', 'cyan', 'long', 'twin-tail', 'white ribbons', 'holographic hairband'],
  }).map(([k, v]) => `- ${k}: ${v.join(', ')}`).join('\n'),
]

export const description = md.content(
  ...about,
  ...appearance,
)
