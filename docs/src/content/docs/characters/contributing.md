---
title: Contributing
---

Hello! I'm glad you're interested in contributing characters.

Before you begin, you should first understand the following:

## CCC

The character cards on this site are written using `@moeru-ai/ccc`.

You need to know git (GitHub), Node.js and TypeScript and use this library to write or modify character cards.

Read [CCC's Readme](../packages/ccc) to get started.

## Acceptable Content Guidelines

The following types are explicitly not welcome:

- **Realistic or Non-female human characters**
  - This is not in line with the philosophy of Moeru-AI.
- **VTuber**
  - If it's an AI and not a human, there's no restriction.
- **HoYoverse characters**
  - There are already plenty of them online, I don't think more are needed.

By contributing content to Moeru-AI, you agree that it complies with Moeru-AI's acceptable content guidelines.

## Issues

When you're not sure if the character you want to make will be accepted by Moeru-AI
(if it doesn't violate the Acceptable Content Guidelines above),
feel free to [submit a new issue](https://github.com/moeru-ai/deck/issues/new).

## Pull Requests

### Package

Put it in the corresponding package according to the character type.

- `@moeru-ai/characters-original`: Original character
  - For original works
- `@moeru-ai/characters-derivative`: Derivative character
  - For more OOC (out-of-character) re-creations
- `@moeru-ai/characters-existing`: Existing character
  - For less OOC (out-of-character) re-creations

### Category

A new category will only be added when there are more than five "likely to add" characters.

Otherwise some generic categories will be created, such as "Anime" "Visual Novel" and so on.

For specific categories, here are some additional notes:

#### Touhou Project

> TODO

For the Touhou Project character, I'd suggest referencing EraTohoTW.

But please try to avoid using "<ruby>口上<rp>(</rp><rt>Kōjō</rt><rp>)</rp></ruby>" directly. if you use, make sure that the license (`./ERB/口上・メッセージ関連/個人口上/**/ライセンステンプレ.txt`) allows for both "era 以外への流用" and "二次創作".

#### Visual Novel

> TODO

Use official Twitter avatars whenever possible, products with official English translations are preferred.

For PLists, it is recommended to refer to the vndb characters page.

When contributing a character, please make sure you have purchased the corresponding game.

If I receive a DMCA takedown notice, I will remove the character as requested.
