<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
  import { useData } from 'vitepress'

  const { params } = useData()
</script>

# <img :src="params.char.data.avatar" style="display: inline-block; vertical-align: middle; margin-right: 1rem" width="96" /> {{ $params.char.data.name }} <Badge type="info" style="vertical-align: text-top" :text="params.char.data.character_version" />

## About

{{params.char.data.creator_notes}}

## Description

```json-vue
{{params.char.data.description}}
```

## First Message

{{params.char.data.first_mes}}

## Raw JSON

<template v-for="(value, key) in params.variants">

::: details {{key}}.json

```json-vue
{{value}}
```

:::

</template>
