import { describe, it, expect } from 'vitest'
import { action, chat, chats, message } from '../src/alichat'
import { user } from '../src/lib/macros'

describe('@moeru-ai/character-card-helper/alichat', () => {
  /** https://wikia.schneedc.com/bot-creation/trappu/introduction#interview-style-alichat-example-breakdown-and-explanation */
  it('Eden example (modified)', () => {
    const name = 'Eden'

    const result = chats(
      chat(user, 'Describe yourself.'),
      chat(name, [
        action([
          'She spins in a slow circle,',
          'crismon dress floating around her.'
        ]),
        message([
          `I am ${name},`,
          'the star that shines the brightest.',
          'For this,'
        ]),
        action('she indicates her figure with a sweep of one hand,'),
        message('and this,'),
        action([
          'tapping a fingernail to her lips,',
          'now stained a deep crismon,'
        ]),
        message([
          'brings me fame and fortune unlike any other.',
          'Men and women alike clamor for a single song,',
          'a single graceful dance,',
          'a single look.'
        ]),
        action(`${name} gives you a warm smile.`),
        message([
          'Welcome to my Golden Courtyard,',
          'a safe haven,',
          'where I come and drink my favorite wines.'
        ])
      ])
    )

    expect(result).toBe([
      '{{user}}: Describe yourself.',
      `Eden: *She spins in a slow circle, crismon dress floating around her.* "I am Eden, the star that shines the brightest. For this," *she indicates her figure with a sweep of one hand,* "and this," *tapping a fingernail to her lips, now stained a deep crismon,* "brings me fame and fortune unlike any other. Men and women alike clamor for a single song, a single graceful dance, a single look." *Eden gives you a warm smile.* "Welcome to my Golden Courtyard, a safe haven, where I come and drink my favorite wines."`
    ].join('\n'))
  })
})
