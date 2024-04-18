import type { DefaultTheme as Theme } from 'vitepress'

export const editLink = {
    // pattern: 'https://github.com/moeru-ai/hub/edit/main/:path'
    pattern: ({ filePath }) => {
        const base = new URL('https://github.com/moeru-ai/hub/edit/main/')

        if (filePath.startsWith('characters/') && !(filePath === 'characters/index.md'))
            return new URL(`packages/characters/src/${filePath.slice(11, -3)}.ts`, base).href

        return new URL(`docs/${filePath}`, base).href
    }
} satisfies Theme.EditLink
