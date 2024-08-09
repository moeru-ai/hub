import fs from 'node:fs/promises'
import path from 'node:path'

import type { CharacterCard } from './types'

export interface BuildEntry {
  [key: string]: BuildEntry | CharacterCard
}

export interface BuildOptions {
  /** @default './dist'' */
  outDir?: string
}

export const build = async (entry: BuildEntry, options: Partial<BuildOptions> = {}) => {
  const { outDir = './dist' } = options

  try {
    await fs.mkdir(outDir)
  }
  catch { }

  for (const [key, value] of Object.entries(entry)) {
    if (value.spec === 'chara_card_v2') {
      await fs.writeFile(path.join(outDir, `${key}.json`), JSON.stringify(value, null, 2))
    }
    else {
      await fs.mkdir(path.join(outDir, key))
      await build(value as BuildEntry, { ...options, outDir: path.join(outDir, key) })
    }
  }
}
