import antfu from '@antfu/eslint-config'
import ii from '@importantimport/eslint-config'

export default antfu({ astro: true })
  .append(ii({ functional: false }))