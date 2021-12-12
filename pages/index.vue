<template>
  <div>
    <h1>
      {{ message }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class HomePage extends Vue {
  message: string = 'Hello World'
}
</script>
