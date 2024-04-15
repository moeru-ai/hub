# @moeru-ai/hub

A simple hub. based on [VitePress](https://github.com/vuejs/vitepress) / [Nólëbase](https://github.com/nolebase/integrations).

## [Characters](/packages/characters/)

```ts
// json
import tsukuyomi from '@moeru-ai/characters/visual_novel/tsukuyomi/tsukuyomi.json' assert { type: 'json' }
// object
import { json } from '@moeru-ai/characters'

console.log(tsukuyomi)
console.log(json.visual_novel.tsukuyomi.tsukuyomi)
```

## License

Different packages in this repository use different licenses, please check the `README.md` of the corresponding package.

When not otherwise specified:

- Libraries such as `@moeru-ai/character-card-helpers` is licensed under a [MIT](LICENSE-MIT).
- Contents such as `@moeru-ai/characters` is licensed under a [CC-BY-NC-SA-4.0](LICENSE-CC-BY-NC-SA).
