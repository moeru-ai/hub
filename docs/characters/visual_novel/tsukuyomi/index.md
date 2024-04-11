<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
  import { data } from './index.data.ts'

  const members = [{
    avatar: data.tsukuyomi.data.avatar,
    name: data.tsukuyomi.data.name,
    title: data.tsukuyomi.data.creator_notes,
  }]
</script>

# Tsukuyomi <Badge type="danger" :text="data.tsukuyomi.data.character_version" />

<VPTeamMembers size="small" :members="members" />

## About

TODO

## Description

{{data.tsukuyomi.data.description}}

## First Message

{{data.tsukuyomi.data.first_mes}}

## Raw JSON

::: code-group

```json-vue [tsukuyomi.json]
{{data.tsukuyomi}}
```

```json-vue [tsukuyomi_variant1.json]
{{data.tsukuyomi_variant1}}
```

:::
