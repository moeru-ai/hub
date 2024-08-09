import { defineCharacterCard } from '@moeru-ai/character-card-helpers'
import { defu } from 'defu'

import pkg from '../package.json' with { type: 'json' }

export interface DefineReiOptions {
  name?: string
}

const defaults: DefineReiOptions = {
  name: 'REI',
}

export const defineRei = (userOptions?: DefineReiOptions) => {
  const { name } = defu(userOptions, defaults)

  return defineCharacterCard({
    character_version: pkg.version,
    name,
  })
}
