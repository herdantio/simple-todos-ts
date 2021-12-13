<template>
  <div>
    <div class="text-4xl">
      <p>Todo Input Form</p>
    </div>
    <div class="p-4">
      <!-- title input -->
      <div>
        <div class="mt-5 mb-5">
          <p>Todo Title: </p>
        </div>
        <div>
          <input v-model="todoTitle" type="text" placeholder="Title Input">
        </div>
      </div>

      <!-- completed input -->
      <div>
        <div class="mt-5 mb-5">
          <p>Todo Completed Status: </p>
        </div>
        <div>
          <select v-model="todoCompleted">
            <option :value="true">
              Yes
            </option>
            <option :value="false">
              No
            </option>
          </select>
        </div>
      </div>

      <!-- submit data -->
      <div class="mt-5 mb-5">
        <AtomsAButton :a-disabled="!isValidated" @a-click="submitData">
          Add todos
        </AtomsAButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import Todo from '~/types/Todo'
const todos = namespace('todos')

@Component
export default class TodoInputForm extends Vue {
    todoTitle: string = ''
    todoCompleted: boolean = false

    get isValidated () {
      return this.todoTitle.length > 0 && this.todoCompleted !== null
    }

    @todos.Mutation('addTodo') public addTodo!: (todo: Todo) => void

    submitData () {
      if (this.isValidated) {
        const payload = new Todo(this.todoTitle, this.todoCompleted)
        this.addTodo(payload)
        this.$router.push('/')
      }
    }
}
</script>

<style>

</style>
