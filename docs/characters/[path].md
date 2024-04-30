<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
  import { useData } from 'vitepress'

  const { params } = useData()
</script>

# <img :src="params.char.data.extensions.avatar" style="display: inline-block; vertical-align: middle; margin-right: 1rem" width="96" /> {{params.char.data.name}} <Badge type="info" style="vertical-align: text-top" :text="params.char.data.character_version" />

## About

<span style="white-space: pre-wrap">

{{params.char.data.extensions.about}}

</span>

## Creator Notes (PLists)

<span style="white-space: pre-wrap">

{{params.char.data.creator_notes}}

</span>

## Description (Ali:Chat)

<span style="white-space: pre-wrap">

{{params.char.data.description}}

</span>

## First Message

<span style="white-space: pre-wrap">

{{params.char.data.first_mes}}

</span>

## Raw JSON

<template v-for="(value, key) in params.variants">

::: details {{key}}.json

<span style="white-space: pre-wrap">

{{value.data.extensions.about}}

</span>

```json-vue
{{value}}
```

:::

</template>
