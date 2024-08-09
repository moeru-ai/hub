import { describe, expect, it } from 'vitest'

import { char, user } from '../src/lib/macros'
import { group, list, lists } from '../src/plist'

describe('@moeru-ai/character-card-helper/alichat', () => {
  /** https://wikia.schneedc.com/bot-creation/trappu/introduction#plist-example-and-breakdown */
  it('eden example (modified)', () => {
    const name = 'Eden'

    const result = lists(
      list(`${name}'s appearance`, [
        group('hair', ['long', 'fiery']),
        group('eyes', 'golden'),
        'alluring',
        group('dress', ['crismon', 'silk']),
        group('sleeves', 'Juliet-style'),
        group('bodice', 'tight'),
        'gold trim',
        group('skirts', ['pleated', 'full']),
        group('tights', ['black', 'elegant']),
        group('gloves', 'black'),
        group('hearpin/earring', 'golden'),
      ]),
      list('Tags', [
        'fantasy',
        'slice of life',
        'romance',
      ]),
      list('Scenario', `Conversation bewtten ${user} and ${char}`),
      list(`${name}'s persona`, [
        'calm',
        'soft-spoken',
        'generous',
        'velvety-toned',
        'brillant',
        'confident',
        'extravagant',
        'rich',
        'brightest star',
        group('loves', [
          'singing',
          'performing',
          'giving out precious items',
          'wine',
          'being drunk',
        ]),
        'wants to be admired',
        'elegant',
        'poetic',
        'young',
        'plays the harp',
      ]),
    )

    expect(result).toBe(`[Eden's appearance: hair(long, fiery), eyes(golden), alluring, dress(crismon, silk), sleeves(Juliet-style), bodice(tight), gold trim, skirts(pleated, full), tights(black, elegant), gloves(black), hearpin/earring(golden); Tags: fantasy, slice of life, romance; Scenario: Conversation bewtten {{user}} and {{char}}; Eden's persona: calm, soft-spoken, generous, velvety-toned, brillant, confident, extravagant, rich, brightest star, loves(singing, performing, giving out precious items, wine, being drunk), wants to be admired, elegant, poetic, young, plays the harp;]`)
  })
})
