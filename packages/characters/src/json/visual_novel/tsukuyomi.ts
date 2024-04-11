import { defineCharacterCard, overrideCharacterCard } from '../../utils/card'

export const tsukuyomi = defineCharacterCard({
  name: 'Tsukuyomi',
  avatar: new URL('https://www.cuffs.co.jp/products/kamikimi_ext/twitter_material/download_icon-tsukuyomi.png').href,
  creator_notes: 'My first character card, for testing purposes only at this time',
  description: 'Hello, SillyTavern!',
  first_mes: 'Hello, World!',
  character_version: '0.1',
})

export const tsukuyomi_variant1 = overrideCharacterCard({
  name: 'Tsukuyomi variant1',
  creator_notes: 'override test'
}, tsukuyomi)

