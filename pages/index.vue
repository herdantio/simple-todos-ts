<template>
  <TemplatesPagePaddingWrapper>
    <div class="flex flex-row space-x-10">
      <div class="w-1/6">
        <AtomsAButton @a-click="toAddPage">
          Add todos
        </AtomsAButton>
      </div>
      <div class="w-full">
        <OrganismsTodosList v-if="TodoList.length != 0" />
        <h1 v-else class="text-5xl">
          Empty Data
        </h1>
      </div>
    </div>
  </TemplatesPagePaddingWrapper>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import Todo from '~/types/Todo'
const todos = namespace('todos')

@Component
export default class HomePage extends Vue {
  @todos.State TodoList!: Todo[]

  toAddPage () {
    this.$router.push('/add')
  }
}
</script>
