import fs from 'node:fs/promises'
import path from 'node:path'

import * as json from './json'

try {
  await fs.mkdir('./dist')
} catch {}

for (const [category, characters] of Object.entries(json)) {
  try {
    await fs.mkdir(path.join('./dist', category))
  } catch {}

  for (const [character, variants] of Object.entries(characters)) {
    try {
      await fs.mkdir(path.join('./dist', category, character))
    } catch {}

    for (const [variant, json] of Object.entries(variants)) {
      await fs.writeFile(path.join('./dist', category, character, `${variant}.json`), JSON.stringify(json, null, 2))
    }
  }
}
