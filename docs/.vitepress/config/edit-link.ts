import type { DefaultTheme as Theme } from 'vitepress'

export const editLink = {
    // pattern: 'https://github.com/moeru-ai/hub/edit/main/:path'
    pattern: ({ filePath }) => {
        if (filePath.startsWith('characters/'))
            return `https://github.com/moeru-ai/hub/edit/main/packages/characters/src/json/${filePath.slice(11, -3)}.ts`
        else return `https://github.com/moeru-ai/hub/edit/main/${filePath}`
    }
} satisfies Theme.EditLink