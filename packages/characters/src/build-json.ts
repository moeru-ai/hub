import fs from 'node:fs/promises'
import path from 'node:path'

import * as json from './json'
import { stringifyCharacterCard } from './utils/card'

try {
  await fs.mkdir('./dist')
} catch {}

for (const [category, characters] of Object.entries(json)) {
  await fs.mkdir(path.join('./dist', category))

  for (const [character, variants] of Object.entries(characters)) {
    await fs.mkdir(path.join('./dist', category, character))

    for (const [variant, json] of Object.entries(variants)) {
      await fs.writeFile(path.join('./dist', category, character, `${variant}.json`), stringifyCharacterCard(json))
    }
  }
}
