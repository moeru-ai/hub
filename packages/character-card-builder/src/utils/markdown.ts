export const content = (...contents: string[]) => contents.join('\n\n')

export const h = (length: 1 | 2 | 3 | 4 | 5 | 6, str: string) => `${Array.from({ length }).fill('#').join('')} ${str}`
