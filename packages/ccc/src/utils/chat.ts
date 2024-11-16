const prefixAndSuffix = (prefixAndSuffix: string) =>
  (str: string | string[] | TemplateStringsArray, ...substitutions: unknown[]) =>
    `${prefixAndSuffix}${
      substitutions
        ? String.raw(str as TemplateStringsArray, substitutions)
        : Array.isArray(str)
          ? str.join(' ')
          : str
    }${prefixAndSuffix}`

/**
 * Generate action string.
 *
 * @example
 * ```ts
 * const world = 'World'
 * const foo = action`Hello, ${world}!` // `*Hello, World!*`
 * const bar = action('What is love?') // '*What is love?*'
 * const baz = action(['lorem,', 'ipsum']) // '*lorem, ipsum*'
 * ```
 */
export const action = prefixAndSuffix('*')

/**
 * Generate message string.
 *
 * @example
 * ```ts
 * const world = 'World'
 * const foo = message`Hello, ${world}!` // `"Hello, World!"`
 * const bar = message('What is love?') // '"What is love?"'
 * const baz = message(['lorem,', 'ipsum']) // '"lorem, ipsum"'
 * ```
 */
export const message = prefixAndSuffix('"')

export { action as act, message as msg }
