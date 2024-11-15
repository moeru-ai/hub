const prefixAndSuffix = (prefixAndSuffix: string) =>
  (str: string | string[] | TemplateStringsArray, ...substitutions: unknown[]) =>
    `${prefixAndSuffix}${
      substitutions
        ? String.raw(str as TemplateStringsArray, substitutions)
        : Array.isArray(str)
          ? str.join(' ')
          : str
    }${prefixAndSuffix}`

export const action = prefixAndSuffix('*')
export const message = prefixAndSuffix('"')

export { action as act }
export { message as msg }
