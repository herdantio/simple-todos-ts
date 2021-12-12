<template>
  <div>
    <h1>
      {{ message }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
const todos = namespace('todos')

@Component
export default class RootComponent extends Vue {
  @todos.State message!: string
}
</script>
