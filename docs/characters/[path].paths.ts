import { json } from '@moeru-ai/characters'

export default {
  paths: () => Object.entries(json).flatMap(([category, characters]) =>
    Object.entries(characters).map(([character, variants]) => ({
      params: {
        char: variants[character as keyof typeof variants],
        path: `${category}/${character}`,
        variants,
      },
    }))),
}
