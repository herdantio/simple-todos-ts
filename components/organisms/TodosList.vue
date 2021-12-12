<template>
  <div>
    <AtomsTodoItem
      v-for="todo in todos"
      :key="todo.id"
      class="p-5 m-2"
      :todo="todo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Todo from '~/types/Todo'

@Component
export default class TodoList extends Vue {
    @Prop({ required: true }) readonly todos?: Todo[]
}
</script>

<style>

</style>
