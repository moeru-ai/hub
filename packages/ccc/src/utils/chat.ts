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
 * const foo = action`Hello, World` // `*Hello, World*`
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
 * const foo = message`Hello, World` // `"Hello, World"`
 * const bar = message('What is love?') // '"What is love?"'
 * const baz = message(['lorem,', 'ipsum']) // '"lorem, ipsum"'
 * ```
 */
export const message = prefixAndSuffix('"')

export { action as act, message as msg }
