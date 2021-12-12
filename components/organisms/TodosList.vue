<template>
  <div>
    <draggable
      v-model="TodoListDraggable"
      class="list-group"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <AtomsTodoItem
        v-for="todo in TodoList"
        :key="todo.id"
        class="p-5 m-2"
        :todo="todo"
      />
    </draggable>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import draggable from 'vuedraggable'
import Todo from '~/types/Todo'

const todos = namespace('todos')

@Component({
  components: {
    draggable
  }
})
export default class TodoList extends Vue {
  @todos.State TodoList!: Todo[]
  dragging!: boolean
  todos!: Todo[]

  get TodoListDraggable () {
    return this.TodoList
  }

  set TodoListDraggable (value: Todo[]) {
    this.setTodos(value)
  }

  @todos.Mutation public setTodos!: (todos: Todo[]) => void
}
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
