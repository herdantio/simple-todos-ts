<template>
  <div :class="[bgClass, 'flex', 'flex-row', 'justify-between']">
    <div class="text-xl">
      <p>
        {{ todo.title }}
      </p>
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
    <div>
      <AtomsAButton>
        Delete
      </AtomsAButton>
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

  get bgClass () : any {
    return this.todo.completed ? 'bg-green-100' : 'bg-blue-100'
  }

  @todos.Mutation public updateTodoCompleted!: (todo: Todo) => void

  changeTodoStatus (event: any) {
    const payload = new Todo(this.todo.title, this.todo.completed)
    payload.completed = event.target.value === 'true'
    payload.id = this.todo.id
    this.updateTodoCompleted(payload)
    console.log(this.todo)
  }
}
</script>

<style>

</style>
