export function action(action: TemplateStringsArray, ...substitutions: unknown[]): string
export function action(action: string): string
export function action(action: string[]): string
export function action(action: unknown, ...substitutions: unknown[]): string {
  return `*${
    substitutions
      ? String.raw(action as TemplateStringsArray, substitutions)
      : Array.isArray(action)
        ? action.join(' ')
        : action
  }*`
}
export { action as act }

export function message(message: TemplateStringsArray, ...substitutions: unknown[]): string
export function message(message: string): string
export function message(message: string[]): string
export function message(message: unknown, ...substitutions: unknown[]): string {
  return `"${
    substitutions
      ? String.raw(message as TemplateStringsArray, substitutions)
      : Array.isArray(message)
        ? message.join(' ')
        : message
  }"`
}
export { message as msg }
