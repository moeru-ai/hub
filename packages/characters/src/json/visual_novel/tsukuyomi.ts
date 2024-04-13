import { defineCharacterCard, overrideCharacterCard } from '../../utils/card'
import { START, description, traits } from '../../utils/description'

export const tsukuyomi = defineCharacterCard({
  name: 'Tsukuyomi',
  avatar: new URL('https://www.cuffs.co.jp/products/kamikimi_ext/twitter_material/download_icon-tsukuyomi.png').href,
  creator_notes: 'My first character card, for testing purposes only at this time',
  description: description(
    traits(`Personality`, []),
    traits(`Body`, [
      /** https://vndb.org/c85636 */
      'white hair',
      'long hair',
      'side hair',
      'cyan eyes',
      'white teeth',
      'pink lips',
      'white skin',
      'soft skin',
      'big breasts',
      'slim',
      'crop top',
      'short skirts',
      'knee-high socks',
    ]),
    START
  ),
  first_mes: 'Hello, World!',
  character_version: '0.1',
})

export const tsukuyomi_variant1 = overrideCharacterCard({
  name: 'Tsukuyomi variant1',
  creator_notes: 'override test'
}, tsukuyomi)

