/**
 * {@link https://rentry.co/kingbri-chara-guide#advanced-token-micro-optimization}
 */
export type ListSeparator = ', ' | '/' | ({} & string)

/**
 * {@link https://wikia.schneedc.com/bot-creation/trappu/introduction#plists}
 */
export const lists = (...lists: string[]) =>
  `[${lists.join('; ')};]`

export const list = (name: string, values: string | string[], separator: ListSeparator = ', ') =>
  `${name}: ${Array.isArray(values) ? values.join(separator) : values}`

export const group = (name: string, values: string | string[], separator: ListSeparator = ', ') =>
  `${name}(${Array.isArray(values) ? values.join(separator) : values})`
