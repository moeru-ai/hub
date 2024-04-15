import type { DefaultTheme as Theme } from 'vitepress'

export const editLink = {
    // pattern: 'https://github.com/moeru-ai/hub/edit/main/:path'
    pattern: ({ filePath }) => {
        if (filePath.startsWith('characters/'))
            return `https://github.com/moeru-ai/hub/edit/main/packages/characters/src/${filePath.slice(11, -3)}.ts`
        else return `https://github.com/moeru-ai/hub/edit/main/docs/${filePath}`
    }
} satisfies Theme.EditLink
