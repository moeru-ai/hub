import type { UserConfig } from 'vitepress'

/** {@link https://github.com/vuejs/vitepress/issues/2637} */
export const transformPageData: UserConfig['transformPageData'] = (data) => {
  if (data.params && data.relativePath.startsWith('characters/')) {
    data.title = data.title.replace('{{params.char.data.name}}', data.params.char.data.name)
    data.description = data.params.char.data.creator_notes
  }
}
