import tsukuyomi from '@moeru-ai/characters/visual_novel/tsukuyomi/tsukuyomi.json' assert { type: 'json' }
import tsukuyomi_variant1 from '@moeru-ai/characters/visual_novel/tsukuyomi/tsukuyomi_variant1.json' assert { type: 'json' }

export default {
  load: () => ({
    tsukuyomi,
    tsukuyomi_variant1
  })
}
