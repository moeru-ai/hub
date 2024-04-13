export const description = (...column: string[]) =>
    column.join('\n')

/**
 * Inspired by Seraphina
 * @param key 
 * @param values 
 * @returns 
 */
export const traits = (key: string, values: string[]) =>
    `[{{char}}'s ${key} = ${values.join(', ')}]`

/**
 * Inspired by Kisna Kaalana
 * @param key 
 * @param values 
 * @returns 
 */
export const trait = (key: string, values: string[]) =>
    `${key}(${values.join(', ')})`

export const chat = (character: 'USER' | 'CHAR', message: string) =>
    `{{${character.toLowerCase()}}}: ${message}`

export const START = '<START>' as const

export const USER = '{{user}}' as const

export const CHAR = '{{char}}' as const
