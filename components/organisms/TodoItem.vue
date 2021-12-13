<template>
  <div :class="[bgClass, 'flex', 'flex-row', 'justify-between']">
    <div class="text-xl">
      <p v-show="!showUpdateTitle" @click="openInput">
        {{ todo.title }}
      </p>
      <input
        v-show="showUpdateTitle"
        type="text"
        :value="todo.title"
        @keyup.enter="updateTitle "
        @keydown.esc="closeInput"
      >
    </div>
    <div class="text-xl">
      <span>Completed: </span>
      <select @change="changeTodoStatus">
        <option :value="true" :selected="todo.completed == true">
          Yes
        </option>
        <option :value="false" :selected="todo.completed == false">
          No
        </option>
      </select>
    </div>
    <div class="text-xl">
      <i class="cursor-pointer" @click="deleteTodo">
        X
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, namespace } from 'nuxt-property-decorator'
import Todo from '~/types/Todo'
const todos = namespace('todos')

@Component
export default class TodoItem extends Vue {
  @Prop({ required: true }) readonly todo!: Todo

  showUpdateTitle: boolean = false

  get bgClass () : any {
    return this.todo.completed ? 'bg-green-100' : 'bg-blue-100'
  }

  @todos.Mutation public updateTodoCompleted!: (todo: Todo) => void

  @todos.Mutation public updateTodoTitle!: (todo: Todo) => void

  @todos.Mutation public removeTodo!: (todo: Todo) => void

  changeTodoStatus (event: any) {
    const payload = new Todo(this.todo.title, this.todo.completed)
    payload.completed = event.target.value === 'true'
    payload.id = this.todo.id
    this.updateTodoCompleted(payload)
  }

  deleteTodo () {
    const payload = new Todo(this.todo.title, this.todo.completed)
    payload.id = this.todo.id
    this.removeTodo(this.todo)
  }

  updateTitle (event: any) {
    const payload = new Todo(event.target.value, this.todo.completed)
    payload.id = this.todo.id
    if (event.target.value.length > 0) {
      this.updateTodoTitle(payload)
    }
    this.showUpdateTitle = false
  }

  openInput () {
    this.showUpdateTitle = true
  }

  closeInput () {
    this.showUpdateTitle = false
  }
}
</script>

<style>

</style>
