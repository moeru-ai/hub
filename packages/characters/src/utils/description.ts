export const description = (...column: string[]) =>
    column.join('\n')

/**
 * Inspired by Seraphina
 * @param title 
 * @param contents 
 * @returns 
 */
export const traits = (key: string, values: string[]) =>
    `[{{char}}'s ${key} = "${values.join('", "')}"]`

export const chat = (character: 'user' | 'char', message: string) =>
    `{{${character}}}: ${message}`

export const START = '<START>' as const

export const USER = '{{user}}' as const

export const CHAR = '{{char}}' as const
