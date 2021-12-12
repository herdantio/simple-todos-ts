<template>
  <TemplatesPagePaddingWrapper>
    <div class="flex flex-row space-x-10">
      <div class="w-1/6">
        <AtomsAButton class="bg-green-400">
          Add todos
        </AtomsAButton>
      </div>
      <div class="w-full">
        <OrganismsTodosList :todos="TodoList" />
      </div>
    </div>
  </TemplatesPagePaddingWrapper>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import TodosList from '../components/organisms/TodosList.vue'
import Todo from '~/types/Todo'
const todos = namespace('todos')

@Component
export default class HomePage extends Vue {
  @todos.State public TodoList?: Todo[]

  @todos.Mutation public initTodos!: () => void

  mounted () {
    this.initTodos()
    console.log(this.TodoList)
  }
}
</script>
