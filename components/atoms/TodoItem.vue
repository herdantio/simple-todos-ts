<template>
  <div class="bg-green-100 ">
    <p>
      {{ todo.title }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Todo from '~/types/Todo'

@Component
export default class TodoItem extends Vue {
  @Prop({ required: true }) readonly todo?: Todo
}
</script>

<style>

</style>
