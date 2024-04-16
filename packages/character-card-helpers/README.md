# @moeru-ai/character-card-helpers

## Install

```bash
pnpm add -D @moeru-ai/character-card-helpers # pnpm
yarn add -D @moeru-ai/character-card-helpers # yarn
npm i -D @moeru-ai/character/card-helpers # npm
```

## Usage

### Define/Override a Character Card

All fields are optional and default data are used if not present.

```ts
import {
  defineCharacterCard,
  overrideCharacterCard,
} from '@moeru-ai/character-card-helpers'

export const myCharacter = defineCharacterCard({
  name: 'Hello',
  first_mes: ', World!',
})

export const myCharacterWithoutFirstMes = overrideCharacterCard(
  {
    first_mes: '',
  },
  myCharacter
)
```

You can wrap functions to define default data.

```ts
import {
  type CharacterCard,
  type CharacterCardData,
  defineCharacterCard as originalDefineCharacterCard,
} from '@moeru-ai/character-card-helpers'

export const defineCharacterCard = (data: Partial<CharacterCardData>) =>
  originalDefineCharacterCard({
    creator: 'moeru-ai',
    character_version: '0.1',
    ...data,
  })

export const overrideCharacterCard = (
  overrides: Partial<CharacterCardData>,
  defaults: CharacterCard
) =>
  defineCharacterCard({
    ...defaults.data,
    ...overrides,
  })
```

You can also use [`defu`](https://github.com/unjs/defu) to get advanced merger:

```ts
import {
  type CharacterCard,
  type CharacterCardData,
  defineCharacterCard as originalDefineCharacterCard,
} from '@moeru-ai/character-card-helpers'
import { defu } from 'defu'

export const defineCharacterCard = (data: Partial<CharacterCardData>) =>
  originalDefineCharacterCard(
    {
      creator: 'moeru-ai',
      character_version: '0.1',
      ...data,
    },
    defu
  )

export const overrideCharacterCard = (
  overrides: Partial<CharacterCardData>,
  defaults: CharacterCard
) => defineCharacterCard(defu(overrides, defaults))
```

### Ali:Chat

Ali:Chat helpers is exported at `@moeru-ai/character-card-helpers/alichat`.

You can also import the `alichat` from the main entry:

```ts
import * as alichat from '@moeru-ai/character-card-helpers/alichat'
// equal
import * as alichat from '@moeru-ai/character-card-helpers/alichat.js'
// equal
import { alichat } from '@moeru-ai/character-card-helpers'
```

Example:

```ts
/** example from {@link https://wikia.schneedc.com/bot-creation/trappu/creation#alichat-example-dialogue-2} */
import { user } from '@moeru-ai/character-card-helpers'
import { action, chat, chats } from '@moeru-ai/character-card-helpers/alichat'

const name = 'Pardofelis' as const

const description = chats(
  chat(user, 'Likes and dislikes?')
  chat(name, [
    // string
    action(`${name}' mismatched eyes lit up.`)
    // array
    message([
      'Oh, things I like?',
      'Well, shiny stuff—obviously!',
      'Trinkets, gems, anything that sparkles and catches my eye.',
    ]),
    action('She glanced around the room proudly at her collection of treasures.'),
    message(`And cats!
Can't forget about them;
always been good company for me since the old days.`),
    action('Her ears perked up.'),
    // array to string
    message([
      `Plus, nappin' in cozy spots.`,
      `Ahh, there's nothin' quite like a good snooze surrounded by treasures.`,
      `As for things I don't like...`
      `hmm... confrontations and fighting ain't my cup o' tea.`
      `Tend to avoid 'em when I can—I’m no brawler.`
    ].join(' ')),
    // tagged templates
    action`She shook her head lightly, ears twitching with annoyance.`
  ])
)

// {{user}}: Likes and dislikes?
// Pardofelis: *Pardofelis' mismatched eyes lit up.* "Oh, things I like? Well, shiny stuff-obviously! Trinkets, gems, anything that sparkles and catches my eye." ...
console.log(description)
```

### PList

PList helpers is exported at `@moeru-ai/character-card-helpers/plist`.

You can also import the `plist` from the main entry:

```ts
import * as plist from '@moeru-ai/character-card-helpers/plist'
// equal
import * as plist from '@moeru-ai/character-card-helpers/plist.js'
// equal
import { plist } from '@moeru-ai/character-card-helpers'
```

Example:

```ts
/** example from {@link https://wikia.schneedc.com/bot-creation/trappu/introduction#plist-example-and-breakdown} */
import { char, user } from '@moeru-ai/character-card-helpers'
import { group, list, lists } from '@moeru-ai/character-card-helpers/plist'

const name = 'Eden'

const creator_notes = lists(
  list(`${name}'s appearance`, [
    group('hair', ['long', 'fiery']),
    group('eyes', 'golden'),
    'alluring'
  ]),
  list('Tags', ['fantasy', 'slice of life', 'romance']),
  list('Scenario', `Conversation between ${user} and ${char}`)
)

// [Eden's appearance: hair(long, fiery), eyes(golden), alluring; Tags: fantasy, slice of life, romance; Scenario: Conversation between {{user}} and {{char}};]
console.log(creator_notes)
```

## License

[MIT](../../LICENSE-MIT)
