import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

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
    await mkdir(outDir)
  }
  catch { }

  for (const [key, value] of Object.entries(entry)) {
    if (value.spec === 'chara_card_v2') {
      await writeFile(join(outDir, `${key}.json`), JSON.stringify(value, null, 2))
    }
    else {
      await mkdir(join(outDir, key))
      await build(value as BuildEntry, { ...options, outDir: join(outDir, key) })
    }
  }
}
