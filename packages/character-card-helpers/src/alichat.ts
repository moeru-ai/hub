import type { char, user } from './lib/macros'

export type ChatSeparator = ' ' | ({} & string)

export const chats = (...chats: string[]) =>
  chats.join('\n')

export const chat = (
  name: typeof user | typeof char | ({} & string),
  message: string | string[],
  separator: ChatSeparator = ' '
) => `${name}: ${Array.isArray(message) ? message.join(separator) : message}`

export const action = (action: string | string[], separator: ChatSeparator = ' ') =>
  `*${Array.isArray(action) ? action.join(separator) : action}*`

export const message = (message: string | string[], separator: ChatSeparator = ' ') =>
  `"${Array.isArray(message) ? message.join(separator) : message}"`
