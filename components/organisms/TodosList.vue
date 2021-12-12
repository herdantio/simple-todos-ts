<template>
  <div>
    <AtomsTodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import TodoItem from '../atoms/TodoItem.vue'
import Todo from '~/types/Todo'

@Component
export default class TodoList extends Vue {
    @Prop({ required: true }) readonly todos: Todo[]
}
</script>

<style>

</style>
